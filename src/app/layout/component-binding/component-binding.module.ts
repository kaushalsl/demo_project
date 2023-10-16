import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentBindingRoutingModule} from './component-binding-routing.module';
import {ComponentBindingComponent} from './component-binding.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [
    ComponentBindingComponent
  ],
  imports: [
    CommonModule,
    ComponentBindingRoutingModule,
    SharedModule,
  ]
})
export class ComponentBindingModule {
}
