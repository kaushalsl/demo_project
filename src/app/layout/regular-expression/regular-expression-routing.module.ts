import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegularExpressionComponent} from './regular-expression.component';

const routes: Routes = [{ path: '', component: RegularExpressionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegularExpressionRoutingModule { }
