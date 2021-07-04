import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthserGuard } from './shared/authser.guard';


const routes: Routes = [

  //lazy loading from another module
  {path: "admin",loadChildren:()=>import('./admin/admin.module')
  .then(mod=>mod.AdminModule)
  },
  //child routes
  {path:'',redirectTo:'home',pathMatch:'full'},//default routes

    {path:'home',component:HomeComponent,  
   children:[
    {path : 'employee', component:EmployeeComponent},]
  },
  
  {path : 'employee', component:EmployeeComponent ,canActivate:[AuthserGuard]},
  {path : 'nav', component: NavBarComponent},
  {path: '**', redirectTo:'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
