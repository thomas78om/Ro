export interface RefActivite {
  id: number;
  code: string;
  libelleCourt: string;
  libelleLong: string;
  commentaire: string;
}

export interface RefsA {
  refs: Array<RefActivite>;
}
