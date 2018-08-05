import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private _router: Router) { }

  canActivate( currentRouteSnapShot: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
  {
    let childId: number = currentRouteSnapShot.params['id'];
    return ((childId >= 0) && (childId < 100));
  }

}
