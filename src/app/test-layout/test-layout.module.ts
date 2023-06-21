import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TestLayoutRoutingModule} from './test-layout-routing.module';
import {TestLayoutComponent} from './test-layout.component';
import {Test1Component} from './test1/test1.component';


@NgModule({
  declarations: [
    TestLayoutComponent,
    Test1Component
  ],
  imports: [
    CommonModule,
    TestLayoutRoutingModule
  ]
})
export class TestLayoutModule {
}
