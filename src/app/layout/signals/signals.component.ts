import {Component, computed, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent implements OnInit {
  infoForm!: FormGroup;
  firstName = signal('Kaushal');
  lastName = signal('Prajapati');
  data = toSignal(this._http.get('https://jsonplaceholder.typicode.com/posts'));

  fullName = computed(() => this.firstName() + ' ' + this.lastName());

  marqueeText: string = '';

  constructor(private _http: HttpClient) {
    this.infoForm = new FormGroup({
      fName: new FormControl(this.firstName()),
      lName: new FormControl(this.lastName())
    });
  }


  ngOnInit() {
    /*const source = timer(1000, 2000);
    const subscribe = source.subscribe((val: any) => {
      this.marqueeText = val;
      console.log(this.marqueeText);
    });*/
  }

  changeName(formValue: any) {
    this.firstName.set(formValue.fName);
    this.lastName.set(formValue.lName);
  }

  callHttpApi() {
    this._http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: value => console.log(value)
      });
  }
}
