import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
