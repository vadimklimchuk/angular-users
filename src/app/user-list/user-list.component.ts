import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user.model';
import { UserService } from '../user.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<User>;

  constructor(private userService: UserService,
              private router: Router) {
    this.users = new Array<User>();
  }

  ngOnInit() {
    this.getLocalStorage();
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  //  take out from localStorage ID of the selected user
  getLocalStorage() {
    if (localStorage.userId !== null && !isNaN(localStorage.userId)) {
      const id = localStorage.getItem('userId');
      this.router.navigate(['users/' + id]);
    }
  }
}
