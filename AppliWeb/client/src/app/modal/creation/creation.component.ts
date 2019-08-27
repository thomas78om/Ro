import { Component, NgModule, OnDestroy, ViewChildren, Input } from '@angular/core';
import { Store, Action, State, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { reducers, getTodos, getCurrentFilter, getErrors, TodosState } from '../../state/reducers';
import {getRefs, RefsACTState, RefsSACT} from '../../state/reducers';
import { combineReducers, ActionReducer } from '@ngrx/store';
import { RefsSA , RefSActivite} from '../../state/reducers/ref-secteur-activite/ref-secteur-activite.model';

import * as fromRefs from '../../state/reducers/ref-secteur-activite/ref-secteur-activite.action';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RefActivite, RefsA} from '../../state/reducers/ref-activite/ref-activite.model';


@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnDestroy {
  refs: Observable<RefsSA>;
  public remplieT = false;
  @Input() SecteurActivite: string;
  @Input()
  title: string;
  @Input()
  bgColor: string;
  @Input()
  body: string;
  @Input()
  cancel: string;
  @Input()
  confirm: string;
  constructor(
    private _store: Store<RefsSACT>,
    private activeModal: NgbActiveModal,
  ) {
    this.refs = _store.select(getRefs);
    this.title = 'Secteur activité';
    this.body = '';
  }
  private remplie(input , input2,  input3) {
    if (input.value.length === 0 || input2.value.length === 0 || input3.value.length === 0 ) {
      return this.remplieT;
    } else {
      return !this.remplieT;
    }
  }
  private addRef(input, input2, input3, input4 ) {
    if (input.value.length === 0 || input2.value.length === 0 || input3.value.length === 0  ) { return;}
    this._store.dispatch(
      new fromRefs.AddRef(
        <RefSActivite> { libelleCourt: input.value, libelleLong : input3.value, code: input2.value , commentaire: input4.value}
      )
    );

  }
  private annuler(input, input2, input3,input4) {
    input.value = ''; input2.value = ''; input3.value = ''; input4.value = '';
  }
  private save( sa : HTMLInputElement ){
    console.log(( < HTMLInputElement > sa).autocomplete );
  }
  public ngOnDestroy() {

  }
}
