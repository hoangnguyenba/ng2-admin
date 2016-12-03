import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(user, pass): Observable<boolean> {
  	if(user == "admin" && pass == "admin")
    	return Observable.of(true).delay(2000).do(val => {
    		this.isLoggedIn = true;
    		localStorage.setItem("isLoggedIn", "true");
    	});
    else
    	return Observable.of(true).delay(2000).do(val => {
    		this.isLoggedIn = false;
    		localStorage.setItem("isLoggedIn", "false");
    	});
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem("isLoggedIn");
  }
}
