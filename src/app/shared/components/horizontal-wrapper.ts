import {Component, ViewChild, ViewContainerRef} from '@angular/core';

import {FieldWrapper} from 'ng-formly';

@Component({
  selector: 'horizontal-wrapper',
  template: `
    <div class="form-group row [ngClass]=" {'has-danger': valid}"">
    <label [attr.for]="key" class="col-sm-2 col-form-label">{{ to.label }}</label>
    <div class="col">
      <ng-template #fieldComponent></ng-template>
    </div>
    </div>
  `
})
export class HorizontalWrapper extends FieldWrapper {

  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent!: ViewContainerRef;

}
