import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/mymodels';
import { UserAuthService } from '../services/user-auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input()
  user$: User={
    username:'',
    email:'',
    password:'',
    role:''
  };
  msg:string=''
  constructor(private userService:UserAuthService, private route:Router) { }

  ngOnInit(): void {

  }

  OnSignUp()
  {
    console.log(this.user$);
    this.userService.signup(this.user$).subscribe(data=>{
      this.msg='successfully registered';
      this.user$={
        username:'',
        email:'',
        password:'',
        role:''
      };
      localStorage.setItem("isLoggedIn","true");
      this.route.navigate(['/teachers/tdashboard']);
    })
  }

}
