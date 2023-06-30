import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RxjsOperatorRoutingModule} from './rxjs-operator-routing.module';
import {RxjsOperatorComponent} from './rxjs-operator.component';
import {SubjectReplyComponent} from './subject-reply/subject-reply.component';


@NgModule({
  declarations: [
    RxjsOperatorComponent,
    SubjectReplyComponent
  ],
  imports: [
    CommonModule,
    RxjsOperatorRoutingModule
  ]
})
export class RxjsOperatorModule { }
