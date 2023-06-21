import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestLayoutComponent} from './test-layout.component';
import {Test1Component} from './test1/test1.component';

const routes: Routes = [
  {
    path: '',
    component: TestLayoutComponent,
    children: [
      {path: 'test1', component: Test1Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestLayoutRoutingModule {
}
