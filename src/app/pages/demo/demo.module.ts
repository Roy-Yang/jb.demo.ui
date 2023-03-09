import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { DemoRoutingModule } from './demo-routing.module'
import { Page1Component } from './page1/page1.component';
import { TranslationApiService, TranslationApiLoader } from 'jabil-bus-lib';

const routes: Routes = [{ path: '', component: Page1Component }];
export function translationApiLoaderFactory(api: TranslationApiService) {
  return new TranslationApiLoader(api);
}

@NgModule({
  imports: [
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
