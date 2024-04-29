import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.isLoggedIn();
  }
  isLoggedIn(): boolean {
    if (localStorage.getItem("isLoggedIn")==="true") {
      console.log(localStorage.getItem("isLoggedIn"));
      return true;
    }
    else
      return false;
  }

}
