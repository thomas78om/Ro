import {createSelector} from '@ngrx/store';
import {AppState} from '../reducers/index.reducer';


export const selectReferentielState = (state: AppState) => state.referentiel;
export const load = createSelector(
  selectReferentielState,
  referentiel => referentiel.referentiels
);
