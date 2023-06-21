import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RxjsOperatorComponent} from './rxjs-operator.component';
import {SubjectReplyComponent} from '@layout/rxjs-operator/subject-reply/subject-reply.component';

const routes: Routes = [
  {path: '', component: RxjsOperatorComponent},
  {path: 'reply-subject', component: SubjectReplyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsOperatorRoutingModule {
}
