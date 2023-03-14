import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WebsocketService } from 'jabil-bus-lib';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  providers: [WebsocketService]
})
export class Page1Component implements OnInit, OnDestroy {
  loading: boolean = false;

  QRVisible: boolean = false;
  qrData: object = { id: 'asdadadadasdadas' };
  @ViewChild('qr') qr: any | undefined;

  videoVisible: boolean = false;
  videoSrc: string = '';
  webSocket: any = null;

  constructor(private translate: TranslateService, private websocketService: WebsocketService) {
    this.translate.use(localStorage.getItem('lang') || 'en');
    this.translate.get('download').subscribe((res: string) => {
      console.log(res);
    });
  }

  // websocket demo
  ngOnInit(): void {
    // init(url: string, params: any, resFunc: any, isReConnect?: boolean): any;
    // this.webSocket = this.websocketService.init(
    //   'wss url',
    //   {},
    //   (data: any) => {
    //     console.log(data)
    //   },
    //   true
    // );
  }

  public ngOnDestroy() {
    // this.webSocket.noReConnect = true;
    // this.webSocket?.close();
  }

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
