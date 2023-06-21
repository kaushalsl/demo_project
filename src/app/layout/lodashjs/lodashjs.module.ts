import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LodashjsRoutingModule} from './lodashjs-routing.module';
import {LodashjsComponent} from './lodashjs.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChildTestComponent} from './child-test/child-test.component';

@NgModule({
  declarations: [
    LodashjsComponent,
    ChildTestComponent
  ],
  imports: [
    CommonModule,
    LodashjsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LodashjsModule {
}
