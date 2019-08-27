export interface RefActeGestion {
 // id: number;
  code: number;
  libelleCourt: string;
  libelleLong: string;
  commentaire: string;
}

export interface RefsAG {
  refs: Array<RefActeGestion>;
}
