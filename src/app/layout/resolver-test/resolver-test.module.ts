import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResolverTestRoutingModule} from './resolver-test-routing.module';
import {ResolverTestComponent} from './resolver-test.component';
import {DetailsComponent} from './details/details.component';


@NgModule({
  declarations: [
    ResolverTestComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ResolverTestRoutingModule
  ]
})
export class ResolverTestModule { }
