import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { Todos, Todo } from './todo/todo.model';
import * as todos from './todo/todo.reducers';

import { RefsAG, RefActeGestion } from './ref-acte-gestion/ref-acte-gestion.model';
import * as refs from './ref-acte-gestion/ref-acte-gestion.reducers';

import { RefsA, RefActivite } from './ref-activite/ref-activite.model';
import * as refsAct from './ref-activite/ref-activite.reducers';

import { RefsSA, RefSActivite } from './ref-secteur-activite/ref-secteur-activite.model';
import * as refsSAct from './ref-secteur-activite/ref-secteur-activite.reducers';




import { Filter } from './filter/filter.model';
import * as currentFilter from './filter/filter.reducers';
import { select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as errors from './errors/errors.reducer';
import { Errors } from './errors/errors.model';

export interface TodosState extends Todos /* , Filter, Errors*/ { }
export interface RefsState extends RefsAG {}



export const reducers: ActionReducerMap<TodosState> = {
  todos: todos.reducer,
  //currentFilter: currentFilter.reducer,
  //errors: errors.reducer
};
export const reducer: ActionReducerMap<RefsState> = {
  refs : refs.refreducer,

}

export interface RefsACTState extends RefsA {}
export const reducerAct: ActionReducerMap<RefsACTState> = {
  refs : refsAct.Activitereducer,

}

export interface RefsSACT extends RefsSA {}
export const reducerSA: ActionReducerMap<RefsSACT> = {
  refs : refsSAct.SActivitereducer,

}

export const selectTodos = (state: TodosState) => state.todos;
export const getTodos = s => s.todos;
export const getRefs = s => s.refs;










//export const getCurrentFilter = s => s.currentFilter;
//export const getErrors = s => s.errors;
// export const selectCurrentFilter = (state: TodosState) => state.currentFilter;

//export const getFilteredTodos = createSelector(
 // selectTodos,
 // selectCurrentFilter,
 // getVisibleTodos
//);

/*function getVisibleTodos(todos: Array<Todo>, filter: string) {
  console.log('Doing calculations...');
  if (!todos || !filter) return;
  let t = todos.slice().reverse();
  switch (filter) {
    case 'SHOW_ACTIVE':
      return t.filter(t => !t.completed);
    case 'SHOW_COMPLETED':
      return t.filter(t => t.completed);
    case 'SHOW_ALL':
    default:
      return t;
  }
};*/


// before v5
// export const getTodos = state$ => state$.select(s => s.todos);
// export const getCurrentFilter = state$ => state$.select('currentFilter');

/*
import { ActionReducerMap, select } from '@ngrx/store';
import * as TodoActions from './todoActions';
import { Action } from '@ngrx/store';
import { Todo, TodoAction, FilterAction, Todos, ErrorAction, TodosState } from './models';
*/
