import { NgModule } from '@angular/core';
import DemoHttpService from './demo/demo';
import { HttpService } from 'jabil-bus-lib';

@NgModule({
  declarations: [],
  providers: [HttpService, DemoHttpService],
  entryComponents: [],
  imports: [],
  exports: [],
})
export class ApiModule {
  constructor() {}
}
