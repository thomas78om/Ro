import { RefSActivite, RefsSA } from './ref-secteur-activite.model';
import { RefActions, RefActionTypes } from './ref-secteur-activite.action';

export const initialState: Array<RefSActivite> = [];
export const SActivitereducer = (state = initialState, action: RefActions): Array<RefSActivite> => {
  switch (action.type) {
    case RefActionTypes.AddRef:
      return state.concat(<RefSActivite>{
        id: action.payload.id,
        libelleCourt: action.payload.libelleCourt,
        libelleLong: action.payload.libelleLong,
        code: action.payload.code,
        commentaire: action.payload.commentaire,
      });
    case RefActionTypes.ToggleRef:
      return toggleRef(state, action);
    case RefActionTypes.DeleteRef:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
};

function toggleRef(refs, action){
  //map returns new array
  return refs.map(ref => {
    //skip other items
    if (ref.id !== action.payload.id)
      return ref;
    //toggle
    return {
      id: ref.id,
      libelle: ref.text,
      completed: !ref.completed
    };
  });
}
