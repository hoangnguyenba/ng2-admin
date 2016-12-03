import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  
  menus: any[] = [
    {
      icon: "home",
      name: "Dashboard",
      link: "/"
    },
    {
      icon: "info",
      name: "About",
      link: "/about"
    }
  ];

  constructor(private authService: AuthService, private router: Router) {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

}
