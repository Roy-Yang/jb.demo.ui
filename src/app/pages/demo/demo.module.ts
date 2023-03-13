import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { DemoRoutingModule } from './demo-routing.module';
// primeng
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { Page1Component } from './page1/page1.component';
import {
  TranslationApiService,
  TranslationApiLoader,
  LoadingModule,
  QRModule,
  VideoDialogModule,
  SecondToHourModule,
  FormatTimeModule,
} from 'jabil-bus-lib';

const routes: Routes = [{ path: '', component: Page1Component }];
export function translationApiLoaderFactory(api: TranslationApiService) {
  return new TranslationApiLoader(api);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    LoadingModule,
    QRModule,
    VideoDialogModule,
    SecondToHourModule,
    FormatTimeModule,

    // primeng
    ButtonModule,
    DialogModule,

    DemoRoutingModule,
    RouterModule.forChild(routes),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translationApiLoaderFactory,
        deps: [TranslationApiService],
      },
    }),
  ],
  exports: [RouterModule],
  declarations: [Page1Component],
})
export class DemoModule {}
