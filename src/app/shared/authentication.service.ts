import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtHelperService } from '';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token : any;

  constructor(private http: HttpClient,
              private router: Router) { }



              get_user_info(){
                if(localStorage.getItem('token'))
                {


                const helper = new JwtHelperService();
                let token = localStorage.getItem('token');
                let total_object = JSON.parse(token);
                let error = "error"
                if(!total_object.loginSuccess){
                  return error
                }
                else{
                  return total_object;
                }
              }
            }

  }

