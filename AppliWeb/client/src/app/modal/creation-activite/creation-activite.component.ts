import { Component, NgModule, OnDestroy, ViewChildren, Input } from '@angular/core';
import { Store, Action, State, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { reducers, getTodos, getCurrentFilter, getErrors, TodosState } from '../../state/reducers';
import { getRefs, RefsACTState } from '../../state/reducers';
import { combineReducers, ActionReducer } from '@ngrx/store';
import { RefsA , RefActivite} from '../../state/reducers/ref-activite/ref-activite.model';

import * as fromRefs from '../../state/reducers/ref-activite/ref-activite.action';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-creation-activite',
  templateUrl: './creation-activite.component.html',
  styleUrls: ['./creation-activite.component.css']
})
export class CreationActiviteComponent  implements OnDestroy {


  refs: Observable<RefsA>;
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
    private _store: Store<RefsACTState>,
    private activeModal: NgbActiveModal,
  ) {
    this.refs = _store.select(getRefs);
    this.title = 'Activité';
    this.body = '';
  }
  private remplie(input , input2,  input3) {
    if (input.value.length === 0 || input2.value.length === 0 || input3.value.length === 0 ) {
      return this.remplieT;
    } else {
      return !this.remplieT;
    }
  }

  /*activite = [
    {id: 'Cottisation', name: 'Cottisation'},
    {id: 'Arbitrage', name: 'Arbitrage'},
    {id: 'Epargne', name: 'Epargne'}
  ];
  selectedActiviteIds: number[];
  addCustomActivite = (term) => ({id: term, name: term});*/

  private addRef(input, input2, input3 , input4) {
    if (input.value.length === 0 || input2.value.length === 0 || input3.value.length === 0) return;
    this._store.dispatch(
      new fromRefs.AddRef(
        <RefActivite>{ libelleCourt: input.value, libelleLong : input3.value, code: input2.value , commentaire: input4.value }
      )
    );

  }

  private annuler(input, input2, input3,input4) {
    input.value = ''; input2.value = ''; input3.value = ''; input4.value = '';
  }

  public ngOnDestroy() {

  }
}
