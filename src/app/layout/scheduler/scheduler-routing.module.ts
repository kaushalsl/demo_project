import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SchedulerComponent} from "./scheduler.component";

const routes: Routes = [
  {
    path: '',
    component: SchedulerComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SchedulerRoutingModule {
}
