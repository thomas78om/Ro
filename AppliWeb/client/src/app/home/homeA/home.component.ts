import { Component, NgModule, OnDestroy, ViewChildren } from '@angular/core';
import { Store, Action, State, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { reducers, getTodos, getCurrentFilter, getErrors, TodosState } from '../../state/reducers';
import { combineReducers, ActionReducer } from '@ngrx/store';
import { Todo } from '../../state/reducers/todo/todo.model';
import { BaseError } from '../../state/reducers/errors/errors.model';
import * as fromTodos from '../../state/reducers/todo/todo.actions';
import * as fromFilter from '../../state/reducers/filter/filter.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{




}
