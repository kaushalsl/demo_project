import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RxjsComponent} from './rxjs.component';
import {AddComponent} from './add/add.component';

const routes: Routes = [
  {path: '', component: RxjsComponent},
  {path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule {
}
