import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Request } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseURL = 'http://localhost:8080';
 /* private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions ({headers : this.headers}); */
  constructor(private _http: Http) { }

  saveUsers(model: any)  {
    return this._http.post(  '/webapi/save', { model});
  }

  // saveUserss(model: any) {
  //   return this._http.post(  '/api', { dataProvider: 'RegisterProvider', method: 'saveUsers', requestData: model });
  // }

  // getUser() {
  //   return this._http.get(  'webapi/getusers');
  // }
  }
