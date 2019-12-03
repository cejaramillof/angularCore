import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav', {static: true}) localSideNav;
  title = 'Angular Core Workshop';

  links = [
    {path: '/', title: 'Home', icon: 'home'},
    {path: '/customers', title: 'Customers', icon: 'face'},
    {path: '/projects', title: 'Projects', icon: 'work'}
  ];

  toggle() {
    this.localSideNav.toggle();
  }
}
