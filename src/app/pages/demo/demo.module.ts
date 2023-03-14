import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { DemoRoutingModule } from './demo-routing.module';
// primeng
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';

import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';

import { Page1Component } from './pages/page1/page1.component';
import { TableComponent } from './pages/table/table.component';
import { FormComponent } from './pages/form/form.component';
import { QuillComponent } from './pages/quill/quill.component';
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
import en from './common/en.json';
import zh from './common/zh.json';
export function translationApiLoaderFactory(api: TranslationApiService) {
  const currLang = localStorage.getItem('lang') || 'en';
  const langJson = currLang === 'en' ? en : zh;
  return new TranslationApiLoader(api, langJson);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // jabil-bus-lib
    LoadingModule,
    QRModule,
    VideoDialogModule,
    SecondToHourModule,
    FormatTimeModule,

    // primeng
    ButtonModule,
    PaginatorModule,
    TableModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    MultiSelectModule,
    CalendarModule,
    RadioButtonModule,
    CascadeSelectModule,
    InputTextareaModule,
    InputSwitchModule,

    NzUploadModule,
    NzCascaderModule,

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
  declarations: [Page1Component, TableComponent, FormComponent, QuillComponent],
})
export class DemoModule {}
