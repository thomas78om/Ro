import {IReferentiel} from '../../dto/interface/referentiel';
import {ReferentielActions, ReferentielActionTypes} from './actions/referentiel.actions';

export interface ReferentielState {
  referentiels: IReferentiel[];
}

export const initialState: ReferentielState = {
  referentiels: [],

}
export function referentielReducer(state = initialState, action: ReferentielActions): ReferentielState {
  let referentiel = [];
  let code = -1;
  switch (action.type) {
    case ReferentielActionTypes.LOAD:
      return {...state, referentiels: action.payload};
    case ReferentielActionTypes.ADD:
      referentiel = Object.assign([], state.referentiels);
      referentiel.push(action.payload);
      return {...state, referentiels: referentiel};
    case ReferentielActionTypes.DELETE:
      code = state.referentiels.findIndex(item => item.code === Number(action.payload.code));
      referentiel = Object.assign([], state.referentiels);
      referentiel.splice(code, 1);
      return {...state, referentiels: referentiel};
    default:
      return state;
  }
}

