import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReplaySubject} from 'rxjs';
import {Books} from '@layout/rxjs/books';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = 'http://aca2021.patientinfo.in/';
  public dataAPI: any = {};
  public passInterceptor = false;
  emitData = new ReplaySubject(4);
  name = '';

  constructor(private http: HttpClient, private _location: Location) {
    this.dataAPI = {
      login: (data: any) => {
        return this.postAjaxMethod(this.baseUrl + 'api/Account/login', data);
      },
      fetchBookAPI: () => {
        return this.http.get<Books[]>('https://jsonplaceholder.typicode.com/posts');
      },
      addBookAPI: (data: Books) => {
        return this.http.post<Books>('https://jsonplaceholder.typicode.com/posts', data);
      }
    };

    this.setNames('set name')
  }

  setNames(name: string) {
    this.name = name;
  }

  getName() {
    return 'Kaushal Prajapati';
  }

  getAjaxMethod(url: any) {
    return this.http.get(url);
  }

  postAjaxMethod(url: any, data: any) {
    return this.http.post(url, data);
  }

  deleteAjaxMethod(srno: any) {
    return this.http.delete(srno);
  }

  getToken() {
    return (this.userDetails()) ? `Bearer ${this.userDetails().token}` : '';
  }

  userDetails() {
    const data: any = localStorage.getItem('token');
    return JSON.parse(data);
  }

  dateIsoString(date: any) {
    return new Date(date).toISOString();
  }

  patternValidate() {
    return {
      'email': '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
      'mobile': '^[0-9]+$'
    };
  }

  validationMsg() {
    return {
      'mobile': [
        {type: 'required', message: 'Mobile is required.'},
        {type: 'minlength', message: 'Enter 10 Digit Mobile Number.'},
        {type: 'maxlength', message: 'Mobile cannot be more than 25 characters long.'},
        {type: 'pattern', message: 'Your Mobile must contain only numbers.'},
        {type: 'validMobile', message: 'Your Mobile has already been taken.'}
      ],
      'pin': [
        {type: 'required', message: 'PIN required.'}
      ],
      'name': [
        {type: 'required', message: 'Name is required.'},
        {type: 'userNameNotAvailable', message: 'Name is not available.'}
      ],
      'address': [
        {type: 'required', message: 'Address is required.'}
      ],
      'city': [
        {type: 'required', message: 'City is required.'}
      ],
      'zipCode': [
        {type: 'required', message: 'Zipcode is required.'},
        {type: 'pattern', message: 'Your Zipcode must contain only numbers.'},
      ],
      'email': [
        {type: 'required', message: 'Email is required.'},
        {type: 'pattern', message: 'Enter Email is invalid.'}
      ],
      'selection': [
        {type: 'required', message: 'Select any one.'},
      ],
      'number': [
        {type: 'required', message: 'required.'},
        {type: 'pattern', message: 'Enter only numeric.'}
      ],
      'typeNumber': [
        {type: 'required', message: 'required.'},
        {type: 'pattern', message: 'Enter only numeric.'},
        {type: 'min', message: 'Minimum Enter Value 1'},
        {type: 'max', message: 'Maximum Enter Value 20'}
      ],
      'captcha': [
        {type: 'required', message: 'Captcha required.'},
        {type: 'pattern', message: 'Enter only numeric.'},
        {type: 'min', message: 'Minimum Enter Value 1'},
        {type: 'max', message: 'Maximum Enter Value 20'}
      ],
      'common': [
        {type: 'required', message: 'required.'}
      ],
      'password': [
        {type: 'required', message: 'password is required.'},
        {type: 'minlength', message: 'password length.'},
        {type: 'maxlength', message: 'password length.'}
      ],
      'confirmPassword': [
        {type: 'required', message: 'Confirm password is required.'},
        {type: 'minlength', message: 'Confirm password length.'},
        {type: 'maxlength', message: 'Confirm password length.'},
        {type: 'matching', message: 'password and Confirm Password does not Match.'},
        {type: 'passwordMismatch', message: 'password and Confirm Password does not Match.'}
      ]
    };
  }

  testAPI() {
    return this.getAjaxMethod('https://jsonplaceholder.typicode.com/albums');
  }

  gotoBack() {
    this._location.back();
  }
}
