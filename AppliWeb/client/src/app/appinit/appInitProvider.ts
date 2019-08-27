import {Injectable} from '@angular/core';
import {DataService} from '../services/data.service';

import {Datas} from '../const/data';
import {IApp} from '../dto/interface/app';
import {IApiResponse} from '../dto/interface/api.response';

@Injectable()
export class AppInitProvider {


  private _app: IApp;

  constructor(private dataService: DataService) {
  }

  get app(): IApp {
    return this._app;
  }

  init() {
    console.log('AppInitProvider : init()');
    return new Promise((resolve, reject) => {
      this.dataService
        .getDatas([ Datas.APP])
        .subscribe(response => {
          this._app = response.datas[Datas.APP];
          resolve(true);
        });
    });
  }


}
