import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  loading: boolean = false;

  QRVisible: boolean = false;
  qrData: object = { id: 'asdadadadasdadas' };
  @ViewChild('qr') qr: any | undefined;

  videoVisible: boolean = false;
  videoSrc: string = '' +
    ''

  constructor(private translate: TranslateService) {
    this.translate.use(localStorage.getItem('lang') || 'en');
    this.translate.get('download').subscribe((res: string) => {
      console.log(res);
    });
  }

  ngOnInit(): void {}

  // ----------------------Loading----------------------
  showLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  // ----------------------Loading----------------------

  // ----------------------QR----------------------
  showQR() {
    this.QRVisible = true;
  }

  printQR() {
    this.qr.printQR();
  }
  // ----------------------QR----------------------

  showVideo() {
    this.videoVisible = true
  }
}
