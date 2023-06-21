import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CalenderRoutingModule} from './calender-routing.module';
import {CalenderComponent} from './calender.component';
import {FullCalendarModule} from '@fullcalendar/angular';

@NgModule({
  declarations: [
    CalenderComponent
  ],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    FullCalendarModule
  ]
})
export class CalenderModule {
}
