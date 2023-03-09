import { Injectable } from '@angular/core';
import { HttpService } from 'jabil-bus-lib';

@Injectable()
export default class DemoHttpService {
  constructor(private http: HttpService) {}

  public post(data?: any) {
    const header: any = {}
    return this.http.request({
      url: '/demo/demo/demo',
      method: 'post',
      data,
    }, header);
  }

  public get(data?: any) {
    const header: any = {}
    return this.http.request({
      url: '/demo/demo/demo',
      method: 'get',
      data,
    }, header);
  }

  public delete(data?: any) {
    const header: any = {}
    return this.http.request({
      url: '/demo/demo/demo',
      method: 'delete',
      data,
    }, header);
  }

  public put(data?: any) {
    const header: any = {}
    return this.http.request({
      url: '/demo/demo/demo',
      method: 'put',
      data,
    }, header);
  }

  public download (data?: any) {
    const header: any = {}
    return this.http.request({
      url: '/demo/demo/demo',
      method: 'download',
      responseType: 'blob',
      data,
    }, header);
  }
}
