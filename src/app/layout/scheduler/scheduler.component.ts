import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  public timeSlotForm!: FormGroup;
  public startTime: any = '08:00';
  public endTime: any = '20:30';
  public setMinutes: any = '15';
  public finalTimeSlot: any = {}; // store appointment time user select the appointment
  public printBookAppointmentSlot: any = {}; // Print appointment table data after select appointment
  public weekNoList: any = [];
  public showTable = false;
  public selectAll = false;

  constructor(private fb: FormBuilder) {
    this.weekNoList = this.weekNoListEntry();
    this.timeSlotFormControl();
  }

  ngOnInit(): void {
    this.removeLocalStorage();
  }

  timeSlotFormControl() {
    this.timeSlotForm = this.fb.group({
      morningTime: this.fb.array([], [Validators.required]),
      noonTime: this.fb.array([], [Validators.required]),
      eveningTime: this.fb.array([], [Validators.required]),
      nightTime: this.fb.array([], [Validators.required]),
      blockTime: this.fb.array([], [Validators.required]),
      weeks: this.fb.array([], [Validators.required])
    });
  }

  removeLocalStorage() {
    localStorage.removeItem('finalSlot');
  }

  weekNoListEntry() {
    return [
      {
        id: '1',
        label: 'Monday',
        isChecked: false
      },
      {
        id: '2',
        label: 'Tuesday',
        isChecked: false
      },
      {
        id: '3',
        label: 'Wednesday',
        isChecked: false
      },
      {
        id: '4',
        label: 'Thursday',
        isChecked: false
      },
      {
        id: '5',
        label: 'Friday',
        isChecked: false
      },
      {
        id: '6',
        label: 'Saturday',
        isChecked: false
      },
      {
        id: '7',
        label: 'Sunday',
        isChecked: false
      }
    ];
  }

  bookTimeSlot() {
    this.timeSlotFormControl();
    this.removeLocalStorage();
    this.weekNoList = this.weekNoListEntry();
    this.printBookAppointmentSlot = [];
    this.finalTimeSlot = {};
    this.showTable = false;
    this.selectAll = false;
    this.allTimeRange();
  }

  allTimeRange() {
    let allTimes = []; // time array
    let tt = 0; // start time
    const timeSlotRange: any = [];

    //loop to increment the time and push results in array
    for (let i = 0; tt < 24 * 60; i++) {
      let hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      let mm = (tt % 60); // getting minutes of the hour in 0-55 format
      allTimes[i] = {
        time24: ('0' + (hh % 24)).slice(-2) + ':' + ('0' + mm).slice(-2),
      }; // pushing data in array in [00:00 - 24:00  format]
      tt = tt + +this.setMinutes;
    }

    allTimes.map((time: any) => {
      if (time.time24 >= this.startTime && time.time24 < this.endTime) {
        timeSlotRange.push(time);
      }
    });

    this.divideTimeInSlotWise(timeSlotRange);
  }


  divideTimeInSlotWise(timeSlot: any) {
    const morning: any = [];
    const noon: any = [];
    const evening: any = [];
    const night: any = [];

    for (let value of timeSlot) {
      value.time12 = this.tConvert(value.time24);
      value.isChecked = false;
      value.isBlock = false;
      if (value.time24 < '12:00') {
        morning.push(value);
      } else if (value.time24 < '17:00') {
        noon.push(value);
      } else if (value.time24 < '20:00') {
        evening.push(value);
      } else if (value.time24 >= '20:00') {
        night.push(value);
      }
    }
    this.finalTimeSlot = {
      morningTime: morning,
      noonTime: noon,
      eveningTime: evening,
      nightTime: night
    };
  }

  bookAppointmentSlots(e: any, formControlName: any, timeObj: any) {
    const bookSlot: FormArray = this.timeSlotForm.get(formControlName) as FormArray;
    if (e.target.checked) {
      bookSlot.push(new FormControl(e.target.value));
      timeObj.isChecked = true;
    } else {
      timeObj.isChecked = false;
      const index = bookSlot.controls.findIndex(x => x.value === e.target.value);
      bookSlot.removeAt(index);
    }
    console.log(this.timeSlotForm.value);
  }

  blockAppointmentSlots(e: any, timeObj: any) {
    const blockSlot: FormArray = this.timeSlotForm.get('blockTime') as FormArray;
    if (e.target.checked) {
      blockSlot.push(new FormControl(e.target.value));
      timeObj.isBlock = true;
    } else {
      timeObj.isBlock = false;
      const index = blockSlot.controls.findIndex(x => x.value === e.target.value);
      blockSlot.removeAt(index);
    }
    console.log(this.timeSlotForm.value);
  }

  selectAllAppointmentSlot(e: any) {
    this.selectAll = !this.selectAll;
    if (e.target.checked) {
      this.updateStatus(true);
    } else {
      this.updateStatus(false);
    }
  }

  updateStatus(status: boolean) {
    this.addRemoveSelectAllAppointment('morningTime', status);
    this.addRemoveSelectAllAppointment('noonTime', status);
    this.addRemoveSelectAllAppointment('eveningTime', status);
    this.addRemoveSelectAllAppointment('nightTime', status);
  }

  addRemoveSelectAllAppointment(formControlName: any, status: any) {
    const slot: FormArray = this.timeSlotForm.get(formControlName) as FormArray;
    for (let val of this.finalTimeSlot[formControlName]) {
      if (!val.isBlock) {
        // push all appointment time in an array when isChecked false and status is true(true = selectAll, false = deselectAll)
        if (!val.isChecked && status) {
          val.isChecked = true;
          slot.push(new FormControl(val.time12));
        }

        // remove data in formGroup array when user clicks selectAll checkbox unchecked when status is false
        if (!status) {
          val.isChecked = false;
          const index = slot.controls.findIndex(x => x === val.time12);
          slot.removeAt(index);
        }
      }
    }
  }

  submit(formValue: any) {
    if (formValue.weeks.length === 0) {
      alert('Select any week day');
      return;
    } else if (
      formValue.morningTime.length === 0 &&
      formValue.noonTime.length === 0 &&
      formValue.eveningTime.length === 0 &&
      formValue.nightTime.length === 0 &&
      formValue.blockTime.length === 0
    ) {
      alert('Book Any Slot');
      return;
    }

    this.printBookAppointmentSlot = formValue;
    console.log(this.printBookAppointmentSlot);
    const slotObj = {
      finalTimeSlot: this.finalTimeSlot,
      week: this.weekNoList,
      ...formValue
    };
    localStorage.setItem('finalSlot', JSON.stringify(slotObj));
    $('.modal').modal('hide');
    this.showTable = true;
  }

  replaceOldData(modalStatus: string) {
    $('.modal').modal(modalStatus);
    const slotTime = JSON.parse(<any>localStorage.getItem('finalSlot'));
    if (slotTime !== null) {
      this.finalTimeSlot = slotTime.finalTimeSlot;
      this.weekNoList = slotTime.week;
      this.printBookAppointmentSlot = {
        morningTime: slotTime.morningTime,
        noonTime: slotTime.noonTime,
        eveningTime: slotTime.eveningTime,
        nightTime: slotTime.nightTime,
        blockTime: slotTime.blockTime,
        weeks: slotTime.weeks
      };
      this.timeSlotForm = this.fb.group({
        morningTime: this.fb.array(slotTime.morningTime),
        noonTime: this.fb.array(slotTime.noonTime),
        eveningTime: this.fb.array(slotTime.eveningTime),
        nightTime: this.fb.array(slotTime.nightTime),
        blockTime: this.fb.array(slotTime.blockTime),
        weeks: this.fb.array(slotTime.weeks)
      });
    } else {
      this.finalTimeSlot = {};
      this.printBookAppointmentSlot = {};
    }

    console.log(this.finalTimeSlot);
    console.log(this.timeSlotForm.value);
    console.log(JSON.parse(<any>localStorage.getItem('finalSlot')));
    console.log(this.printBookAppointmentSlot);
  }

  checkWeekNoMatch(weekNo: any) {
    if (this.printBookAppointmentSlot.weeks.length === 0) {
      return false;
    }
    return this.printBookAppointmentSlot.weeks.includes(weekNo.toString());
  }

  sorting(array: any) {
    return array.sort((a: any, b: any) => {
      const d1: any = new Date('1970/01/01 ' + a);
      const d2: any = new Date('1970/01/01 ' + b);
      return d1 - d2;
    });
  }

  isEmptyObject(value: any) {
    return Object.keys(value).length === 0 && value.constructor === Object;
  }

  tConvert(time: any) {
    // Check a correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If a time format corrects
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }
}
