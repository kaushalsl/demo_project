import {Component} from '@angular/core';
import {FieldType} from 'ng-formly';

@Component({
  selector: 'formly-field-input',
  template: `
    <input [type]="type" [formControl]="formControl" class="form-control" [formlyAttributes]="field"
           [ngClass]="inputClass">
  `,
})
export class FormlyFieldInput extends FieldType {
  get type(): string {
    return this.to.type || 'text';
  }

  get inputClass(): string | string[] {

    let klass: string[];

    klass = this.to.inputClass ? [this.to.inputClass] : [];

    if (this.valid) {
      klass.push('form-control-danger');
    }

    return klass;
  }
}
