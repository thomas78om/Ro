import { Component, OnInit, Input } from '@angular/core';
import {ModalHelperService} from '../../services/modal.helper.service';
import {CreationComponent} from '../../modal/creation/creation.component';
import {CreationActiviteComponent} from '../../modal/creation-activite/creation-activite.component';
import {CreationActeGestionComponent} from '../../modal/creation-acte-gestion/creation-acte-gestion.component';
import {Observable} from 'rxjs';
import {ITest} from '../../dto/interface/test';
import {IReferentiel} from '../../dto/interface/referentiel';


import { faPlusCircle, faMinusCircle, faCheckCircle, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';

import {getRefs, RefsACTState, RefsSACT, RefsState} from '../../state/reducers';
import {combineReducers, ActionReducer, Store} from '@ngrx/store';
import { RefsSA , RefSActivite} from '../../state/reducers/ref-secteur-activite/ref-secteur-activite.model';

import * as fromRefs from '../../state/reducers/ref-secteur-activite/ref-secteur-activite.action';
import { RefsAG , RefActeGestion} from '../../state/reducers/ref-acte-gestion/ref-acte-gestion.model';

import * as fromRefsAG from '../../state/reducers/ref-acte-gestion/ref-acte-gestion.action';

import { RefsA , RefActivite} from '../../state/reducers/ref-activite/ref-activite.model';

import * as fromRefsACT from '../../state/reducers/ref-activite/ref-activite.action';
import {Toast} from 'ngx-toastr';




@Component({
  selector: 'app-creation-h',
  templateUrl: './creation-h.component.html',
  styleUrls: ['./creation-h.component.css']
})
export class CreationHComponent implements OnInit {
  refs: Observable<RefsSA>;
  refsAG: Observable<RefsAG>;
  refsA: Observable<RefsA>;
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;
  faCheckCircle = faCheckCircle;
  faArrowsAltV = faArrowsAltV;

  public isCollapsed = true;
  public isCollapsed2 = true;
  public remplieT = false;
  @Input() selectedActiviteIds: string;



  constructor(  private _store3: Store<RefsACTState>, private _store: Store<RefsSACT>, private _store2: Store<RefsState>, private modalHelperService: ModalHelperService) { this.refs = _store.select(getRefs); this.refsAG = _store.select(getRefs);this.refsA = _store.select(getRefs);}
  ngOnInit() {
  }
  public openModalCreation(): void {
    this.modalHelperService
      .openLgModal(CreationComponent);
  }
  public openModalCreationActivite(): void {
    this.modalHelperService
      .openLgModal(CreationActiviteComponent);
  }
  public openModalCreationActeGestion(): void {
    this.modalHelperService
      .openLgModal(CreationActeGestionComponent);
  }

  private addRefSectAct(input) {
    if (input.value.length === 0) { return;}
    this._store.dispatch(
      new fromRefs.AddRef(
        <RefSActivite>{ libelleCourt: input.value  }
      )
    );
  }
  private addRefAG(input) {
    if (input.value.length === 0){ return;}
    this._store.dispatch(
      new fromRefsAG.AddRef(
        <RefActeGestion>{ libelleCourt: input.value }
      )
    );
  }
  private addRefA(input) {
    if (input.value.length === 0) { return;}
    this._store.dispatch(
      new fromRefsACT.AddRef(
        <RefActivite>{ libelleCourt: input.value }
      )
    );
  }

  private remplie(input , input2,  input3) {
    if (input.value.length === 0 || input2.value.length === 0 || input3.value.length === 0 ) {
      return this.remplieT;
    } else {
      return !this.remplieT;
    }
  }
  private annuler(input, input2, input3) {
    input.value = ''; input2.value = ''; input3.value = '';
  }

}
