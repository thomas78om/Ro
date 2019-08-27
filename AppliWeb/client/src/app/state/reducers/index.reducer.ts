import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';



import * as fromReferentiel from './referentiel.reducers';


/*import * as fromUI from './ui.reducer';*/


export interface AppState {
  referentiel: fromReferentiel.ReferentielState;

  /*ui: fromUI.UIState;*/
}

export const reducers: ActionReducerMap<AppState> = {
  referentiel: fromReferentiel.referentielReducer,

  /*ui: fromUI.uiReducer*/
}
