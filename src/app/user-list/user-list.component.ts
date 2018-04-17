import { Component, OnInit } from '@angular/core';

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

  constructor(private userService: UserService) {
    this.users = new Array<User>();
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
