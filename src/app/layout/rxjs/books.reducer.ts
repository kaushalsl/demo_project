import {createReducer, on} from '@ngrx/store';
import {Books} from './books';
import {booksFetchAPISuccess, saveBooksAPISuccess} from './book.action';

export const initialState: ReadonlyArray<Books> = [];

export const bookReducer = createReducer(
  initialState,
  // fetch book API
  on(booksFetchAPISuccess, (state, {allBooks}) => {
    return allBooks;
  }),
  on(saveBooksAPISuccess, (state, {response}) => {
    let newState = [...state];
    newState.unshift(response);
    return newState;
  })
);

