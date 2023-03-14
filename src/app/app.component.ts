import { Component, OnInit } from '@angular/core';
import menuConfig from './menu.json';
import { CommonService } from 'jabil-bus-lib';
import { TranslateService } from '@ngx-translate/core';
import { TranslateData } from 'src/app/pages/demo/common/translate-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CommonService],
})
export class AppComponent implements OnInit {
  menuTreeKeys: any = {};
  menuTree: any = {};

  constructor(private commonService: CommonService, private translate: TranslateService) {}

  public async ngOnInit() {
    this.menuTree = menuConfig.MenuTree;
    this.menuTreeKeys = menuConfig.MenuTreeKeys;
    this.commonService.translateData(TranslateData, this.translate);
  }
}
