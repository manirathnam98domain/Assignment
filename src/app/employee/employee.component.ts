import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { ApiService} from '../shared/api.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


  formValue !: FormGroup;
  showAdd!: boolean;
  showUpdate!: boolean;
  employeemodelObj : Employee  = new Employee();
  employeeData !: any;

  constructor( private formbuilber : FormBuilder , private api : ApiService ) { }

  ngOnInit(): void {
    // Useing ReactiveForm for form and employee and manger.
    this.formValue = this.formbuilber.group({
      fisrtName : ['',[Validators.required]],
      lastName : ['',Validators.required],
      address: ['',Validators.required],
      birthdate : ['',[Validators.required, Validators.pattern("(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/[0-9]{4}")]],
      city :['',Validators.required]

    })
  this.getAllEmployee();

   }

    clickaddempl(){
      this.formValue.reset();
      this.showAdd = true;
      this.showUpdate = false;
    }



  //  to post the new value in json server
      postEmployedetails(){
        this.employeemodelObj.fisrtName  = this.formValue.value.fisrtName;
        this.employeemodelObj.lastName   = this.formValue.value.lastName;
        this.employeemodelObj.address    = this.formValue.value.address;
        this.employeemodelObj.birthdate  = this.formValue.value.birthdate;
        this.employeemodelObj.city       =  this.formValue.value.city;

        this.api.postEmploye(this.employeemodelObj)
         .subscribe(res=> {
           console.log(res);
        alert("Employee Added Successfully");
              let ref = document.getElementById('cancel')
              ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      },
        err=> {
          console.log(this.err)
          alert("Something Went Wrong");
       })

      }
  err(err: any) {
    throw new Error('Something Went Wrong');
  }

  // Get all the data form json server
      getAllEmployee() {
        this.api.getEmployee()
        .subscribe(res =>{
          this.employeeData = res;
        })
      }


      // Delete the data form json server
      deleteemploye(row : any){
        this.api.deleteEmployee(row.id)
        .subscribe(res=>{
          alert("Emplyoee Deleted");
          this.getAllEmployee();
      })
        }


        // Edit method called
        onEdit(row : any){
          this.showAdd = false;
          this.showUpdate = true;

          this.employeemodelObj.id = row.id;
          this.formValue.controls['fisrtName'].setValue(row.fisrtName);
          this.formValue.controls['lastName'].setValue(row.lastName);
          this.formValue.controls['address'].setValue(row.address);
          this.formValue.controls['birthdate'].setValue(row.birthdate);
          this.formValue.controls['city'].setValue(row.city);
        }

        // Upadte the value form the json server
        updateEmployeedetail(){
          this.employeemodelObj.fisrtName  = this.formValue.value.fisrtName;
          this.employeemodelObj.lastName   = this.formValue.value.lastName;
          this.employeemodelObj.address    = this.formValue.value.address;
          this.employeemodelObj.birthdate  = this.formValue.value.birthdate;
          this.employeemodelObj.city       =  this.formValue.value.city;

          this.api.updateEmployee(this.employeemodelObj, this.employeemodelObj.id)
          .subscribe(res=>{
            alert("Update Successfully");
            let ref = document.getElementById('cancel')
          ref?.click();
          this.formValue.reset();
          this.getAllEmployee();
          })

        }



      }



