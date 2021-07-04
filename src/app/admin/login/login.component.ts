import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators}  from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    successMessage:string ="";
    loginForm!: FormGroup;


  constructor(private fb: FormBuilder , private router: Router) { }

  ngOnInit(): void {

  // Form Validation
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })


  }
  
 // Login page will redirected to Employee
  login(){
    
    alert(this.successMessage="Successfully Loggined In...");
    console.log(this.successMessage);
    this.router.navigateByUrl("employee");
  }




}
