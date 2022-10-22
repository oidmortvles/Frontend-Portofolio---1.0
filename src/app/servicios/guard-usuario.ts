import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginServiceService } from "./login-service.service";

export class GuardUsuario implements CanActivate{
    constructor (private loginService : LoginServiceService, private router: Router){

    }
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
         if(this.loginService.isLogged()){
            return true;
        }

        this.router.navigate(['inicio']);
        return false;
    }

}
