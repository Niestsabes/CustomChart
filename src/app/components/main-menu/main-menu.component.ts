import { Component, Input, OnInit } from '@angular/core';
import { MAIN_MENU } from 'src/app/constants/menu';
import { MenuItemInterface } from 'src/app/models/menu-item.interface';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  @Input('menu') public menu: Array<MenuItemInterface>;
  @Input('level') public level: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSubMenu(menuItem: MenuItemInterface): void {
    menuItem.closed = menuItem.closed == undefined ? true : !menuItem.closed;
  }
  
  get menuItemClass(): string {
    return 'main-menu-item-' + this.level.toString();
  }

}
