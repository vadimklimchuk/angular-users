import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { UserResolveService } from './user-list/user-resolve.service';

const routes: Routes = [
  { path: 'users', component: UserListComponent, children: [
    { path: ':id', component: UserDetailComponent, resolve: {
      user: UserResolveService
    } },
    { path: '**', redirectTo: '/users' }
  ] },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
