import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignalsRoutingModule} from './signals-routing.module';
import {SignalsComponent} from './signals.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [
    SignalsComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
    SharedModule
  ]
})
export class SignalsModule {
}
