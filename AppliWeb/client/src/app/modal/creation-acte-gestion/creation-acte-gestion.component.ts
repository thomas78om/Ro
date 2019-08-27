import { Component, NgModule, OnDestroy, ViewChildren,Input } from '@angular/core';
import { Store, Action, State, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { reducers, getTodos, getCurrentFilter, getErrors, TodosState } from '../../state/reducers';
import { getRefs, RefsState } from '../../state/reducers';
import { combineReducers, ActionReducer } from '@ngrx/store';
import { RefsAG , RefActeGestion} from '../../state/reducers/ref-acte-gestion/ref-acte-gestion.model';

import * as fromRefs from '../../state/reducers/ref-acte-gestion/ref-acte-gestion.action';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-creation-acte-gestion',
  templateUrl: './creation-acte-gestion.component.html',
  styleUrls: ['./creation-acte-gestion.component.css']
})
export class CreationActeGestionComponent implements OnDestroy {

 // currentFilter;
  refs: Observable<RefsAG>;
  public remplieT = false;
 // errors: Observable<Array<BaseError>>;

  @Input()
  title: string;
  @Input()
  bgColor: string ;
  @Input()
  body: string;
  @Input()
  cancel: string;
  @Input()
  confirm: string;


  constructor(
    private _store: Store<RefsState>,
    private activeModal: NgbActiveModal,
  ) {
    this.refs = _store.select(getRefs);
    this.title = 'Acte de gestion';
    this.body = '';

    //_store.select(getCurrentFilter)
     // .subscribe(filter => {
     //   this.currentFilter = filter;
     // });
    //this.errors = _store.select(getErrors);
  }

  private remplie(input , input2,  input3) {
    if (input.value.length === 0 || input2.value.length === 0 || input3.value.length === 0 ) {
      return this.remplieT;
    } else {
      return !this.remplieT;
    }
  }

  private addRef(input, input2, input3, input4) {
    if (input.value.length === 0 || input2.value.length === 0 || input3.value.length === 0 ) return;
    this._store.dispatch(
      new fromRefs.AddRef(
        <RefActeGestion>{ libelleCourt: input.value, libelleLong : input3.value, code: input2.value , commentaire: input4.value }
      )
    );

  }

  private annuler(input, input2, input3,input4) {
    input.value = ''; input2.value = ''; input3.value = ''; input4.value = '';
  }

  /*private addTodoAsync(input) {
    this._store.dispatch(
      new fromTodos.AddTodoEffect(
        <Todo>{ text: input.value, completed: false }
      )
    );
    input.value = '';
  }*/

 /* private onTodoClick(id) {
    this._store.dispatch(
      new fromTodos.ToggleTodo(<Todo>{ id })
    );
  }
  private removeTodo(id) {
    this._store.dispatch(
      new fromTodos.DeleteTodo(<Todo>{ id })
    );
  }

  private applyFilter(filter) {
    this._store.dispatch(
      new fromFilter.SetCurrentFilter({ filter })
    );*/
 // }



  public ngOnDestroy() {

  }
}
