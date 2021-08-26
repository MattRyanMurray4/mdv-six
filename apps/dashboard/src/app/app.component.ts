import { Component } from '@angular/core';

@Component({
  selector: 'animals-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Animal Kingdom';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'predators', icon: 'view_list', title: 'Predators-List' },
  ];
}
