import { Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService} from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  
  constructor( private injector: Injector) { }
  intercept(req:any, next:any) {
    let authservice = this.injector.get(ApiService)
    let tokenizedreq = req.clone({
       setHeaders:{
       // Authoriztion: ` Bearer ${authservice.getToken()}` 
          authorization :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjU3NDY4MjksImV4cCI6MTYyNTgzMzIyOX0.f1WskqOtYTxmFHzl1FzVtWDDb9O5VSN9Q5wfr7gTY-w"
      }

    })
    return next.handle(tokenizedreq);
    
  }
}
