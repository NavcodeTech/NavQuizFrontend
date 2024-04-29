import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  loginData$={
    username:'',
    password:'',
    role:''
  };
  constructor() { }

  ngOnInit(): void {

  
  }
  OnLogin()
  {
    console.log(this.loginData$);
    
  }

}
