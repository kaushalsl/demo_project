import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpApiService} from '@services/http-api.service';
import {AppService} from '@services/app.service';
import {validationMessage} from '@shared/validation/validation-message';
import {CustomValidator} from '@shared/validation/validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isAuthLoading = false;
  protected readonly validationMessage = validationMessage;

  constructor(
    private _http: HttpApiService,
    public _appService: AppService,
    private router: Router
  ) {
    this.loginFormController();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  ngOnInit() {
  }

  loginFormController() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.compose([Validators.minLength(10), Validators.maxLength(10), CustomValidator.numberValidator])),
      password: new FormControl('', Validators.compose([CustomValidator.noSpaceWithReqValidator])),
    });
  }

  loggedIn(formValue: any) {
    this.isAuthLoading = true;

    const data = {...formValue};
    console.log(data);

    // this._appService.setPasswordEyeIcon(); // add this function after login successfully
  }
}
