import { Component } from '@angular/core';

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

}
