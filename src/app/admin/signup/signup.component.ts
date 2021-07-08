
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ApiService} from '../../shared/api.service';
import {Signup} from './signup.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';





@Component({
  selector: 'app-sinup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



  successMessage:string =""

  regForm!:FormGroup

  signups : Signup = new Signup()
  email: any
  fisrtName: any
  lastName: any
  password: any
  address: any
  birthdate: any

  responseData:any

  
 
   

  
   

  constructor(private fb: FormBuilder, private router :Router, private api : ApiService,private http : HttpClient,) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      fisrtName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{8,}")]],
      address: ['',[Validators.required]],
      birthdate :['',[Validators.required,Validators.pattern("(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/[0-9]{4}")]]
    })
  }

  // register(){
  //   this.successMessage = "Successfully Registered..."
  //    console.log(this.regForm)
  //    console.log(this.successMessage);
  //    this.router.navigateByUrl("/admin/login");
  // }

  //  to post the new value in json server
  register(){
    this.signups.email      = this.regForm.value.email;
    this.signups.fisrtName  = this.regForm.value.fisrtName;
    this.signups.lastName   = this.regForm.value.lastName;
    this.signups.password   = this.regForm.value.password;
    this.signups.address    = this.regForm.value.address;
    this.signups.birthdate  = this.regForm.value.birthdate;
    this.signups.city       =  this.regForm.value.city;

    this.api.registernow(this.signups)
     .subscribe(res=> {
      this.responseData = JSON.stringify(res.message) 
       console.log(this.responseData);
       
        alert(this.responseData);
        let ref = document.getElementById('cancel')
        ref?.click();
        this.regForm.reset();
        
     },err=> {
      console.log(this.err) 
      alert({ success: false, msg: "Something Went Wrong" });
   })

  }
err(err: any) {
throw new Error('Something Went Wrong');
}


// register(){

//   let resource = JSON.stringify(this.regForm.value );
//   console.log(resource); ((err) => {
      
    //})

  


//   this.api.registernow(this.postdata)
//   .subscribe( data =>{
//     console.log(data)

//   })
// }


}




