import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ZoneRoutingModule} from './zone-routing.module';
import {ZoneComponent} from './zone.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ZoneComponent
  ],
  imports: [
    CommonModule,
    ZoneRoutingModule,
    ReactiveFormsModule
  ]
})
export class ZoneModule {
}
