import { Component, OnInit } from '@angular/core';
import menuConfig from './menu.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnInit {
  menuTreeKeys: any = {};
  menuTree: any = {};

  constructor() {}

  public async ngOnInit() {
    this.menuTree = menuConfig.MenuTree;
    this.menuTreeKeys = menuConfig.MenuTreeKeys;
  }
}
