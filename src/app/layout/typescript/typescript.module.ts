import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TypescriptRoutingModule} from './typescript-routing.module';
import {TypescriptComponent} from './typescript.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [
    TypescriptComponent,
  ],
  imports: [
    CommonModule,
    TypescriptRoutingModule,
    SharedModule
  ]
})
export class TypescriptModule {
}
