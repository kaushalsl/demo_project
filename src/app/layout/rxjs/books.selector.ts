import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Books} from './books';

export const selectBooks = createFeatureSelector<Books[]>('mybooks');
