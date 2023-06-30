import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RxjsOperatorRoutingModule} from './rxjs-operator-routing.module';
import {RxjsOperatorComponent} from './rxjs-operator.component';
import {SubjectReplyComponent} from './subject-reply/subject-reply.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';


@NgModule({
  declarations: [
    RxjsOperatorComponent,
    SubjectReplyComponent,
    ExhaustMapComponent
  ],
  imports: [
    CommonModule,
    RxjsOperatorRoutingModule
  ]
})
export class RxjsOperatorModule { }
