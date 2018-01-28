import { Component } from '@angular/core';
import { MOVIES } from './mocks';

@Component({
  selector: 'kdd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kdd';
  movies = MOVIES;
}
