import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegularExpressionRoutingModule} from './regular-expression-routing.module';
import {RegularExpressionComponent} from './regular-expression.component';
import {ForExampleComponent} from './for-example.component';
import {TabComponent} from './tab.component';

@NgModule({
  declarations: [
    RegularExpressionComponent,
    ForExampleComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    RegularExpressionRoutingModule
  ]
})
export class RegularExpressionModule {
}
