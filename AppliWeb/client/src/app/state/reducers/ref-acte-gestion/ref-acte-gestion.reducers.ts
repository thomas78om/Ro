import { RefActeGestion, RefsAG } from './ref-acte-gestion.model';
import { RefActions, RefActionTypes } from './ref-acte-gestion.action';

export const initialState: Array<RefActeGestion> = [];
export const refreducer = (state = initialState, action: RefActions): Array<RefActeGestion> => {
  switch (action.type) {
    case RefActionTypes.AddRef:
      return state.concat(<RefActeGestion>{
       // id: action.payload.id,
        libelleCourt: action.payload.libelleCourt,
        libelleLong: action.payload.libelleLong,
        commentaire: action.payload.commentaire,
        code: action.payload.code
      });
    /*case RefActionTypes.ToggleRef:
      return toggleRef(state, action);*/
   /* case RefActionTypes.DeleteRef:
      return state.filter(todo => todo.id !== action.payload.id);*/
    default:
      return state;
  }
};

/*function toggleRef(refs, action){
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
}*/
