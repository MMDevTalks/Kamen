import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { AccountService } from './account.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
const API_KEY = '579e8da13fb2050072b7b42d2c4bf5fa';

@Injectable()
export class AuthService {
  public currentAccount$ = new BehaviorSubject<any>(null);
  constructor(private _http: HttpClient, private _accountService: AccountService) { }

  getRequestToken() {
    let params = new HttpParams();
    params = params.set('api_key', API_KEY);
    return this._http.get(`https://api.themoviedb.org/3/authentication/token/new`, { params })
    .do((response: any) => {
      const token = response.request_token;
      const redirectTo = `http://${location.host}/login`;
      location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${redirectTo}`;
    });
   }

   getSession(request_token: string) {
    let params = new HttpParams();
    params = params.set('api_key', API_KEY);
    params = params.set('request_token', request_token);
    return this._http.get(`https://api.themoviedb.org/3/authentication/session/new`, { params })
    .mergeMap((response: any) => {
      localStorage.setItem('session_id', response.session_id);
      return this.getAccountAsync();
    });
   }

   getAccountAsync() {
     return this._accountService.getAccount().map(account => {
       this.currentAccount$.next(account);
      });
   }
}