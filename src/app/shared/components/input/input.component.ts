import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {FieldWrapper, FormlyFieldConfig} from '@ngx-formly/core';
import {validationMessage} from '../../validation/validation-message';

@Component({
  selector: 'formly-field-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends FieldWrapper {

  @ViewChild('fieldComponent', {read: ViewContainerRef}) override fieldComponent!: ViewContainerRef;

  protected readonly validationMessage = validationMessage;


  get type(): string {
    return this.to.type || 'text';
  }

  get inputClass(): string {
    return this.to['inputClass'];
  }

  override get formControl(): NonNullable<FormlyFieldConfig['formControl']> {
    console.log(super.formControl);
    return super.formControl;
  }
}
