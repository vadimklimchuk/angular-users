import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import {UserService} from '../user.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserResolveService implements Resolve<User> {

  constructor(private userService: UserService,
              private router: Router) { }


  //  Get the ID from URL and compare it with ID of users. If we find, then we display the user with this ID.

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | null> {
    const id = +route.paramMap.get('id');
    return this.userService.getUsers()
      .map((users: User[]) => {
        const currentUser = users.find((user: User) => {
          return id === user.id;
        });

        if (!currentUser) {
          throw new Error('no user');
        }

        return currentUser;
      })
      .catch(() => {
        this.router.navigate(['users']);
        return Observable.of(null);
      });
  }
}
