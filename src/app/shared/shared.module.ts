import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {FieldType, FormlyFieldConfig, FormlyModule} from '@ngx-formly/core';
import {ButtonComponent} from './components/button/button.component';
import {InputComponent} from './components/input/input.component';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {PasswordPatternDirective} from '@shared/directives/password-pattern.directive';
import {MatchPasswordDirective} from '@shared/directives/match-password.directive';
import {ValidateUserNameDirective} from '@shared/directives/validate-user-name.directive';
import {TestDirective} from '@shared/directives/test.directive';
import {CountUpModule} from 'ngx-countup';
import {NgSelectModule} from '@ng-select/ng-select';
import {CountDownDirective} from '@shared/directives/count-down.directive';
import {AppRestrictionDirective} from '@servicesapp-restriction.directive';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {SearchNamePipe} from '@shared/pipe/search-name.pipe';
import {ChipModule} from 'primeng/chip';
import {LoadingInterceptorComponent} from '@shared/components/loading-interceptor/loading-interceptor.component';
import {ColorPickerModule} from 'primeng/colorpicker';
import {AutoCompleteModule} from 'primeng/autocomplete';

export function showError(field: FieldType): any {
  return field.formControl && field.formControl.invalid && (field.formControl.dirty || field.formControl.touched || (field.options.parentForm && field.options.parentForm.submitted) || (field.field.validation && field.field.validation.show));
}


export function patternValidationMessage(error: any, field: FormlyFieldConfig) {
  return `${field.props?.label} is invalid`;
}

export function requiredValidationMessage(error: any, field: FormlyFieldConfig) {
  return `${field.props?.label} is required`;
}


const module: any = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  FormlyBootstrapModule,
  NgSelectModule,
  CountUpModule,
  FormsModule,
  ConfirmDialogModule,
  ChipModule,
  ColorPickerModule,
  AutoCompleteModule,
  FormlyModule.forRoot({
    extras: {showError},
    validationMessages: [
      // {name: 'required', message: 'This field is required'},
      {name: 'required', message: requiredValidationMessage},
      {name: 'pattern', message: patternValidationMessage},
    ],
    types: [{
      name: 'button',
      component: ButtonComponent,
      wrappers: ['form-field'],
      defaultOptions: {
        props: {
          btnType: 'primary',
          type: 'submit',
        },
      },
    }],
    wrappers: [
      {name: 'panel', component: InputComponent},
    ],
  }),
];

const component: any = [
  ButtonComponent,
  InputComponent,
  NavbarComponent,
  LoadingInterceptorComponent
];

const directives: any = [
  PasswordPatternDirective,
  MatchPasswordDirective,
  ValidateUserNameDirective,
  TestDirective,
  CountDownDirective,
  AppRestrictionDirective
];

const pipe: any = [
  SearchNamePipe
];

@NgModule({
  declarations: [
    ...component,
    ...directives,
    ...pipe
  ],
  imports: [
    CommonModule,
    ...module,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    ...module,
    ...component,
    ...directives,
    ...pipe
  ]
})
export class SharedModule {
}
