import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Body } from '@angular/http/src/body';
import { appConfig } from './appConfig';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from 'util';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  // private baseUrl = 'http://localhost:8080/api';
  error: any;
  constructor(private http: HttpClient, private router: Router) {

  }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>   {

    const request = req.clone({url: appConfig.apiUrl, body: ''});
    return next.handle(request)
      .catch((error, caught) => {
        return Observable.throw(error);
     });

    }
}
