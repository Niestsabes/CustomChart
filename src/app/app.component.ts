import { Component } from '@angular/core';
import { MAIN_MENU } from './constants/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public MAIN_MENU = MAIN_MENU;

  title = 'myCustomChart';
}
