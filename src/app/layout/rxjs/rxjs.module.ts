import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
/*import {UserEffects} from './user.effects';
import {reducers, metaReducers} from './reducers';*/
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffect } from './book.effect';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    RxjsComponent,
    ChildComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RxjsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('mybooks', bookReducer),
    EffectsModule.forFeature([BooksEffect])
    /* StoreModule.forRoot(reducers, {metaReducers}),
     !environment.production ? StoreDevtoolsModule.instrument() : [],
     EffectsModule.forRoot([UserEffects])*/
  ]
})
export class RxjsModule {
}
