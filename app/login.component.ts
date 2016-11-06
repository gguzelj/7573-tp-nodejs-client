import { Component } from '@angular/core';
import { Router } from '@angular/router';

const USERS = [
  {
    "id": 1,
    "uniq_number": "93106",
    "password": "test1"
  },
  {
    "id": 2,
    "uniq_number": "92037",
    "password": "test2"
  }
];

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'views/login.html'
})

export class LoginComponent {
  constructor(public router: Router) {}

  users = USERS;
  current_user;

  login(user_uniq_number, pwd){
    this.users.forEach(function(user){
      if (user.uniq_number == user_uniq_number && user.password == pwd){
        localStorage.setItem('user_number', user_uniq_number);
        this.router.navigate(['home']);
      }
    }, this);
  };
}
