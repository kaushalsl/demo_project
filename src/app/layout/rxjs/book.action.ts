import {createAction, props} from '@ngrx/store';
import {Books} from './books';

export const invokeBooksAPI = createAction(
  '[Books API] Invoke Books Fetch API'
);

export const booksFetchAPISuccess = createAction(
  '[Books API] Fetch Book API Success',
  props<{ allBooks: Books[] }>()
);


export const invokeSaveBooksAPI = createAction(
  '[Books API] Invoke Save Books API',
  props<{ payload: Books }>()
);

export const saveBooksAPISuccess = createAction(
  '[Books API] Save Books API Success',
  props<{ response: Books }>()
);

