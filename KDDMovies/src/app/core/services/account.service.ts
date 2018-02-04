import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const API_KEY = '579e8da13fb2050072b7b42d2c4bf5fa';


@Injectable()
export class AccountService {

  constructor(private _http: HttpClient) { }

  public getAccount(): Observable<any> {
    let params = new HttpParams();
    params = params.set('api_key', API_KEY);
    params = params.set('session_id', localStorage.getItem('session_id'));
    return this._http.get('https://api.themoviedb.org/3/account', { params });
  }

}
