import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TranslateData } from '../../common/translate-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class TableComponent implements OnInit {
  loading: boolean = false;
  currentLanguage: any = 'en';
  recordCount: number = 0;
  currPanel: string = 'list';
  selectedRows: Array<any> = [];
  tableData: Array<any> = [];
  timeout: any = null;
  searchData: any = {
    title: '',
    first: 0,
    pageIndex: 1,
    pageSize: 10,
  };

  constructor(
    private translate: TranslateService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.currentLanguage = localStorage.getItem('lang') || 'en';
    this.translate.use(this.currentLanguage);
    this.translate.get('download').subscribe((res: string) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(isPaginate?: boolean) {
    this.loading = true;
    if (!isPaginate) {
      this.searchData.pageIndex = 1;
      this.searchData.first = 0;
    }
    // let { data } = await this.http.getData(this.searchData);
    setTimeout(() => {
      this.tableData = [
        {
          title:
            'test test test test test test test test test test test test test test test test test test',
          filed1: 'test',
          filed2: 'test',
        },
        { title: 'test', filed1: 'test', filed2: 'test' },
        { title: 'test', filed1: 'test', filed2: 'test' },
        { title: 'test', filed1: 'test', filed2: 'test' },
        { title: 'test', filed1: 'test', filed2: 'test' },
      ];
      this.recordCount = 5;
      this.loading = false;
    }, 2000);
  }

  paginate(event: any) {
    this.searchData.pageIndex = event.page + 1;
    this.searchData.pageSize = event.rows;
    this.searchData.first = event.first;
    this.getData(true);
  }

  search() {
    if (this.timeout !== null) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.getData();
    }, 1000);
  }

  async editData(data?: any) {
    this.currPanel = 'edit';
  }

  deleteData(item?: any) {
    this.confirmationService.confirm({
      message: TranslateData.isDelete,
      header: TranslateData.confirm,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: TranslateData.yes,
      rejectLabel: TranslateData.no,
      accept: async () => {
        let idList: Array<string> = [];
        if (!item) {
          this.selectedRows.forEach((item: any) => {
            idList.push(item.id);
          });
        } else {
          idList = [item.id];
        }
        this.messageService.add({
          severity: 'success',
          summary: TranslateData.deleteSuccess,
        });

        // let data = await this.http.deleteData({ idList });
        // if (data.code === 0) {
        //   this.messageService.add({
        //     severity: 'success',
        //     summary: TranslateData.deleteSuccess,
        //   });
        //   this.getData();
        // } else {
        //   this.messageService.add({
        //     severity: 'error',
        //     summary: TranslateData.deleteFail,
        //     detail: data.msg,
        //   });
        // }
      },
    });
  }
}
