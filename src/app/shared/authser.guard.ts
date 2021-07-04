import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService} from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserGuard implements CanActivate {
   constructor(private authservice : AuthService, private router: Router){}

  canActivate(){

    if(this.authservice.isUserLoginIn()){
      return true;
    }else{
      this.router.navigate(['/home']);
      return false;
    }

}

}
