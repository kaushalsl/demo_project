import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {ImageOptimizationRoutingModule} from './image-optimization-routing.module';
import {ImageOptimizationComponent} from './image-optimization.component';
import {AppMergerDirective} from '@layout/image-optimization/directive/app-merger.directive';


@NgModule({
  declarations: [
    ImageOptimizationComponent
  ],
  imports: [
    CommonModule,
    ImageOptimizationRoutingModule,
    NgOptimizedImage,
    AppMergerDirective
  ]
})
export class ImageOptimizationModule {
}
