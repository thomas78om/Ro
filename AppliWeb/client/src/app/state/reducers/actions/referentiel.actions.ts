import {Action} from '@ngrx/store';
import {IReferentiel} from '../../../dto/interface/referentiel';

export enum ReferentielActionTypes {
  LOAD = '[Rubrique] LOAD',
  ADD = '[Rubrique] ADD',
  UPDATE = '[Rubrique] UPDATE',
  DELETE = '[Rubrique] DELETE'
}

export class Load implements Action {
  readonly type = ReferentielActionTypes.LOAD;
  constructor(public payload: IReferentiel[]) {}
}

export class Add implements Action {
  readonly type = ReferentielActionTypes.ADD;
  constructor(public payload: IReferentiel) {}
}

export class Update implements Action {
  readonly type = ReferentielActionTypes.UPDATE;
  constructor(public oldValue: IReferentiel, public payload: IReferentiel) {}
}

export class Delete implements Action {
  readonly type = ReferentielActionTypes.DELETE;
  constructor(public payload: IReferentiel) {}
}

export type ReferentielActions = Load | Add | Update | Delete;
