import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MdInput } from '@angular/material';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

 	@ViewChild('username') username: MdInput;
 	@ViewChild('pass') pass: MdInput;

  constructor(
  	private authService: AuthService,
  	private router: Router
  	) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  	this.username.focus();
  }

  login() {
    this.authService.login(this.username.value, this.pass.value).subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }
  logout() {
    this.authService.logout();
  }
}
