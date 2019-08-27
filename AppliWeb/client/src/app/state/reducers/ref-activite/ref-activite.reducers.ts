import { RefActivite, RefsA } from './ref-activite.model';
import { RefActions, RefActionTypes } from './ref-activite.action';

export const initialState: Array<RefActivite> = [];
export const Activitereducer = (state = initialState, action: RefActions): Array<RefActivite> => {
  switch (action.type) {
    case RefActionTypes.AddRef:
      return state.concat(<RefActivite>{
        id: action.payload.id,
        libelleCourt: action.payload.libelleCourt,
        libelleLong: action.payload.libelleLong,
        commentaire: action.payload.commentaire,
        code: action.payload.code
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
