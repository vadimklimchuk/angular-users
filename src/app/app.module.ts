import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { UsersFilterPipe } from './user-list/users-filter.pipe';
import { SearchComponent } from './user-list/search/search.component';
import { UserResolveService } from './user-list/user-resolve.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailComponent,
    FooterComponent,
    UsersFilterPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, UserResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
