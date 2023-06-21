import {AfterContentChecked, Component, DoCheck, NgZone, OnInit} from '@angular/core';
import {UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
  public courseForm: UntypedFormGroup;
  public counter: number = 0;

  public userInfo = [
    {id: 1, name: 'Kaushal', courseId: 1},
    {id: 2, name: 'Nirav', courseId: 2},
    {id: 3, name: 'Bhavesh', courseId: 1},
    {id: 4, name: 'Ravi', courseId: 2},
    {id: 5, name: 'Pranav', courseId: 3},
  ];

  public courseInfo = [
    {id: 1, name: 'BCA'},
    {id: 2, name: 'MCA'},
    {id: 3, name: 'BE.'}
  ];

  data = [
    {
      'id': 1,
      'otherData': 'hi',
      'userId': 1,
      'user': {
        'id': 1,
        'name': 'Nirav'
      }
    },
    {
      'id': 2,
      'otherData': 'hi 2',
      'userId': 1,
      'user': {
        'id': 1,
        'name': 'Nirav'
      }
    },
    {
      'id': 3,
      'otherData': 'hi 3',
      'userId': 1,
      'user': {
        'id': 1,
        'name': 'Nirav'
      }
    },
    {
      'id': 4,
      'otherData': 'hi 4',
      'userId': 2,
      'user': {
        'id': 2,
        'name': 'Kaushal'
      }
    },
    {
      'id': 5,
      'otherData': 'hi 5',
      'userId': 2,
      'user': {
        'id': 2,
        'name': 'Kaushal'
      }
    },
    {
      'id': 6,
      'otherData': 'hi 6',
      'userId': 2,
      'user': {
        'id': 2,
        'name': 'Kaushal'
      }
    }
  ];

  constructor(private _formBuilder: UntypedFormBuilder, private zone: NgZone) {
    if (JSON.parse(<any>localStorage.getItem('userInfo')) !== null) {
      this.userInfo = JSON.parse(<any>localStorage.getItem('userInfo'));
    }

    this.courseForm = this._formBuilder.group({
      courseArray: new UntypedFormArray([])
    });


    this.addCheckboxes();
  }

  get formArray() {
    return this.courseForm.get('courseArray') as UntypedFormArray;
  }

  /*ngDoCheck() {
    console.log('do check' + this.counter++);
  }

  ngAfterContentChecked() {
    console.log('content checked');
  }*/

  async ngOnInit() {

    const data1 = _.groupBy(this.data, 'userId');
    console.log(data1);

    Object.entries(data1)
      .forEach(([key, value]) => {
        for (let res of value) {
          console.log(res);
        }
      });
  }

  updateData() {
    this.zone.runOutsideAngular(() => {
      console.log('zone');
    });
  }

  changeCourseStatus(index: any) {
    this.userInfo[index].courseId = this.formArray.controls[index].value;
    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    alert('Course Status Change Successfully');
  }

  private addCheckboxes() {
    this.userInfo.forEach((value) => this.formArray.push(new UntypedFormControl(value.courseId)));
  }
}
