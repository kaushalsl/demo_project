import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComponentBindingComponent} from './component-binding.component';

const routes: Routes = [{path: '', component: ComponentBindingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentBindingRoutingModule {
}
