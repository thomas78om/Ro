import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Paths} from '../const/paths';
import {IApiResponse} from '../dto/interface/api.response';
import {IReferentiel} from '../dto/interface/referentiel';

@Injectable({providedIn: 'root'})
export class ReferentielService {

  constructor(private httpClient: HttpClient) {
  }

  enregistrerReferentiel(referentiel: IReferentiel): Observable<IApiResponse<IReferentiel>> {
    return this.httpClient.post<IApiResponse<IReferentiel>>( Paths.REFERENTIELS.url, referentiel);
  }

  supprimerReferentiel(id: number): Observable<IApiResponse<void>> {
    return this.httpClient.delete<IApiResponse<void>>( Paths.REFERENTIELS.url + '/' + id);
  }

}
