import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {
constructor(private router: Router ) {}
canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  console.log(localStorage.getItem('todayImage'))
  console.log('test')
  let code = route.queryParams["code"]
  if (!localStorage.getItem('authorized') && !code) {
    this.router.navigateByUrl('/login');
    return false
  } else {
    localStorage.setItem('userCode', code || '')
    return true
  }
 }
}
