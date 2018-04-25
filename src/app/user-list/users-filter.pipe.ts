import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  transform(users: any[], searchTerm: string): any {
    if (!searchTerm) {
      return users;
    }

    return users.filter(user => {
      return user.name.toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    });
  }

}
