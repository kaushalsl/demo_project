import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {CustomValidator} from '@shared/validation/validation';
import {patternValidate, validationMessage} from '@shared/validation/validation-message';
import {AppService} from '@servicesapp.service';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
  validationForm!: FormGroup;
  @ViewChild('testForm1') testForm1!: NgForm;
  public countryList = [
    {id: 1, name: 'India'},
    {id: 2, name: 'USA'}
  ];

  protected readonly validationMessage = validationMessage;
  protected readonly patternValidate = patternValidate;

  constructor(
    private fb: FormBuilder,
    public _appService: AppService
  ) {
    this.validationForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      mobile: new FormControl('', Validators.compose([Validators.minLength(10), CustomValidator.numericValidator])),
      email: new FormControl('', Validators.compose([CustomValidator.emailValidator])),
      gender: new FormControl('', Validators.compose([Validators.required])),
      country: new FormControl(1, Validators.compose([Validators.required])),
      address: new FormGroup({
        street: new FormControl('', Validators.compose([Validators.required]))
      }),
      password: new FormControl('', Validators.compose([Validators.required])),
      confirmPassword: new FormControl('', Validators.compose([Validators.required])),
      acceptTerms: new FormControl(false)
    }, {
      validators: [CustomValidator.match('password', 'confirmPassword')]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.validationForm.controls;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.testForm1.control.patchValue({
        name: 'Kaushal'
      });
    });
  }

  f1(formGroupName: any, formControlName: any): any {
    return this.validationForm.controls[formGroupName].get(formControlName);
  }

  submit(data: any) {
    // this.validationForm.addControl('date', new FormControl('Date')); // add control in formGroup
    console.log(this.validationForm.value);
  }
}
