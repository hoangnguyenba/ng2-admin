import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MdInput } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

 	@ViewChild('username') username: MdInput;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  	this.username.focus();
  }

}
