import {IError} from './error';

export interface IApiResponse<D> {
  datas: D ;
  error: IError;
}
