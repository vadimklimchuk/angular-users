import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
    });

    localStorage.setItem('userId', id + '');    //  add in localStorage ID of the select user
  }

  close(): void {
    this.router.navigate(['']);
    localStorage.setItem('userId', null);
  }

}
