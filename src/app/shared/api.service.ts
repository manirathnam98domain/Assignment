import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map, mapTo} from 'rxjs/operators';
import { pipe  } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Url = 'http://localhost:3000/posts';

  constructor( private http : HttpClient) { }

  postEmploye( data : any){
    return this.http.post<any>(`${baseUrl}posts/`, data)
    .pipe(map((res:any) =>{
      return res;
    }))
   }

   getEmployee(){
    return this.http.get<any>( `${baseUrl}posts/`)
    .pipe(map((res:any) =>{
      return res;
 }))
   }
   updateEmployee( data : any, id: number){
    return this.http.put<any>(`${baseUrl}posts/`+id,data)
    .pipe(map((res:any) =>{
      return res;
 }))
   }

   deleteEmployee(id : number){
    return this.http.delete<any>(`${baseUrl}posts/`+id)
    .pipe(map((res:any) =>{
      return res;
 }))
   }


   registernow(data : any){
     console.log("api called");
    return this.http.post<any>(`${baseUrl}profile/`, data)
    .pipe(map((res:any)=>{
      return res;

    }))
    
   }






}
