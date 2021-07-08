import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {logins} from './login.model';
import { FormGroup, FormBuilder, Validators}  from '@angular/forms';
import {ApiService} from '../../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    successMessage:string ="";
    loginForm!: FormGroup;

    logins : logins = new logins()
    email:any 
    password: any

 

  constructor(private fb: FormBuilder , private router: Router, private api: ApiService) { }

  ngOnInit(): void {

  // Form Validation
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })


  }
  
 // Login page will redirected to Employee
  login(){
    this.logins.email         = this.loginForm.value.email;
    this.logins.password      = this.loginForm.value.password;

    this.api.loginnow(this.logins)
     .subscribe(res=> {
       console.log(res);
    alert("Login  Successfully");
          let ref = document.getElementById('cancel')
          ref?.click();
    this.loginForm.reset();
    this.router.navigateByUrl("employee");

     },
     err=> {
      console.log(this.err)
      alert("Something Went Wrong");
   })
    
    // alert(this.successMessage="Successfully Loggined In...");
    // console.log(this.successMessage);
    // this.router.navigateByUrl("employee");
  }
  err(err: any) {
    throw new Error('Something Went Wrong');
    }




}
