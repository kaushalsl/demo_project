import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImageOptimizationComponent} from './image-optimization.component';

const routes: Routes = [{ path: '', component: ImageOptimizationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers:[

  ],
  exports: [RouterModule]
})
export class ImageOptimizationRoutingModule { }
