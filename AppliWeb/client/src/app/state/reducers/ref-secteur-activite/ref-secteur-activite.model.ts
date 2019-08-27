export interface RefSActivite {
  id: number;
  code: string;
  libelleCourt: string;
  libelleLong: string;
  commentaire: string;
}

export interface RefsSA {
  refs: Array<RefSActivite>;
}
