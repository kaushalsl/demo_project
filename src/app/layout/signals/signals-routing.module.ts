import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignalsComponent} from './signals.component';
import {CanDeactivateGuard} from '@shared/guard/can-deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    component: SignalsComponent,
    canDeactivate: [CanDeactivateGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule {
}
