import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'A list of users';
  alt = 'Angular';
  imageLogo = '../../assets/images/logo.png';
}
