import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {CustomValidationService} from '../validation/custom-validation.service';

@Directive({
  selector: '[appPasswordPattern]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordPatternDirective, multi: true}]
})
export class PasswordPatternDirective implements Validator {

  constructor(private customValidator: CustomValidationService) {
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.patternValidator()(control);
  }
}
