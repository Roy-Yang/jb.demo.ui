import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  constructor(private translate: TranslateService,) {
    this.translate.use(localStorage.getItem('lang') || 'en');
    this.translate.get('download').subscribe((res: string) => {
      console.log(res)
    });
  }

  ngOnInit(): void {}
}
