import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SimpleFormRoutingModule} from './simple-form-routing.module';
import {SimpleFormComponent} from './simple-form.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [
    SimpleFormComponent
  ],
  imports: [
    CommonModule,
    SimpleFormRoutingModule,
    SharedModule
  ]
})
export class SimpleFormModule {
}
