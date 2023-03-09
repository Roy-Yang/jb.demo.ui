// angular core
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import {
  TranslateCacheModule,
  TranslateCacheService,
  TranslateCacheSettings,
} from 'ngx-translate-cache';

// primeng
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToastModule } from 'primeng/toast';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

// modules
import { ApiModule } from '../api/api.module';

// common
import {
  AppInitService,
  SimpleReuseStrategy,
  TranslationApiService,
  TranslationApiLoader,
  CommonService,
  DefaultRouteGuardService,
  LayoutModule,
} from 'jabil-bus-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export function translationApiLoaderFactory(api: TranslationApiService) {
  return new TranslationApiLoader(api);
}

export function translateCacheFactory(
  translateService: TranslateService,
  translateCacheSettings: TranslateCacheSettings
) {
  return new TranslateCacheService(translateService, translateCacheSettings);
}

export function initialize(appInitService: AppInitService) {
  return () => appInitService.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ApiModule,
    LayoutModule,

    PanelMenuModule,
    TieredMenuModule,
    ToastModule,
    CheckboxModule,
    ButtonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translationApiLoaderFactory,
        deps: [TranslationApiService],
      },
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: translateCacheFactory,
        deps: [TranslateService, TranslateCacheSettings],
      },
      cacheMechanism: 'LocalStorage', // default value is 'LocalStorage'.
      //cookieExpiry: 1, // default value is 720, a month.
    }),
  ],
  // provide: NZ_I18N, useValue: en_US ,}
  providers: [
    CommonService,
    DefaultRouteGuardService,
    { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: initialize,
      deps: [AppInitService],
      multi: true,
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AppInitService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
