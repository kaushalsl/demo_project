import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_ASYNC_VALIDATORS, Validator} from '@angular/forms';
import {CustomValidationService} from '../validation/custom-validation.service';

@Directive({
  selector: '[appValidateUserName]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ValidateUserNameDirective), multi: true}]

})
export class ValidateUserNameDirective implements Validator {

  constructor(private customValidator: CustomValidationService) {
  }

  validate(control: AbstractControl): any {
    return this.customValidator.userNameValidator(control);
  }
}
