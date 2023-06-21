import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {EMPTY, exhaustMap, map, mergeMap, switchMap, withLatestFrom} from 'rxjs';
import {booksFetchAPISuccess, invokeBooksAPI, invokeSaveBooksAPI, saveBooksAPISuccess} from './book.action';
import {Books} from './books';
import {selectBooks} from './books.selector';
import {AppService} from '@servicesapp.service';

@Injectable()
export class BooksEffect {
  loadAllBooks$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(invokeBooksAPI),
      withLatestFrom(this.store.pipe(select(selectBooks))),
      mergeMap(([, booksformStore]) => {
          if (booksformStore.length > 0) {
            return EMPTY;
          }
          return this.booksService.dataAPI.fetchBookAPI()
            .pipe(map((data: Books[]) => booksFetchAPISuccess({allBooks: data})
            ));
        }
      ));
  });

  saveNewBooks = createEffect((): any => {
    return this.actions$.pipe(
      ofType(invokeSaveBooksAPI),
      switchMap((action) => {
        return this.booksService.dataAPI.addBookAPI(action.payload).pipe(
          map((data: Books) => saveBooksAPISuccess({response: data}))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private booksService: AppService,
    private store: Store
  ) {
  }
}
