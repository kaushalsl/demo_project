import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentBindingRoutingModule} from './component-binding-routing.module';
import {ComponentBindingComponent} from './component-binding.component';


@NgModule({
  declarations: [
    ComponentBindingComponent
  ],
  imports: [
    CommonModule,
    ComponentBindingRoutingModule
  ]
})
export class ComponentBindingModule {
}
