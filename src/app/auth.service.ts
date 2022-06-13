import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl : string; 
  constructor() { }

  login(name: string, password:string):Observable<boolean>{
    console.log('name='+name);
    console.log('password='+password);
    const isLoggedIn = (name == 'tij' && password=='tij');
    console.log('isLoggedIn='+isLoggedIn);
    return of(isLoggedIn).pipe(
      delay(1000),//simuler 1s comme appel vrai api
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logout(){
    this.isLoggedIn = false;
  }

}
