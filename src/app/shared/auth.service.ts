import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // isUserLoginIn(){
  //  return true;
  //  }
  isUserLoginIn() {
    let token = localStorage.getItem('token');
   // let total_object = JSON.parse(token);
      if(!token){
        return false
      }
      else{
        return true;
      }


     }

  //  isLoggedIn() {
  //   // const helper = new JwtHelperService();
  //   let token = localStorage.getItem('token');
  //   let total_object = JSON.parse(token);
  //   if(!total_object){
  //     return false
  //   }
  //   else{
  //     return true;
  //   }
  //   // const isExpired = helper.isTokenExpired(token);              // will use this when we will change the expire time of the token
  //   // return !isExpired;
  // }
    // const requestOptions = {
    //   headers: new HttpHeaders({
    //     'authorization': token
    //   }),
    //}

}

