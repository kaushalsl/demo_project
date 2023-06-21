import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsRoutingModule} from './forms-routing.module';
import {FormsComponent} from './forms.component';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [
    FormsComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule
  ]
})
export class FormsModules {
}
