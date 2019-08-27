import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Paths} from '../const/paths';
import {IApiResponse} from '../dto/interface/api.response';

@Injectable({providedIn: 'root'})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  getDatas(datas: string[]): Observable<IApiResponse<any>> {
    let param = { dataType : datas };
    return this.httpClient.get<IApiResponse<any>>( Paths.DATAS.url, { params : param });
  }

}
