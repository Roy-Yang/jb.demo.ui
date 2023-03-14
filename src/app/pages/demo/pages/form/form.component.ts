import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { TranslateData } from '../../common/translate-data';
import { MessageService } from 'primeng/api';
import { CommonService, ExcelExportService } from 'jabil-bus-lib';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [MessageService, CommonService, ExcelExportService],
})
export class FormComponent implements OnInit {
  loading: boolean = false;
  isView: boolean = false;
  formData: any = {
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
    g: '1',
    h: '',
    invalid: false,
  };
  cascaderTreeData: Array<any> = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
              isLeaf: true,
            },
          ],
        },
        {
          value: 'ningbo',
          label: 'Ningbo',
          isLeaf: true,
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
              isLeaf: true,
            },
          ],
        },
      ],
    },
  ];

  multiList: Array<any> = [
    { name: 'select1', id: 'select1' },
    { name: 'select2', id: 'select2' },
  ];
  dropdownList: Array<any> = [
    { name: 'select1', id: 'select1' },
    { name: 'select2', id: 'select2' },
  ];
  fileList: Array<any> = [];
  rangeDates: Array<any> = [];

  constructor(
    private translate: TranslateService,
    private messageService: MessageService,
    private commonService: CommonService,
    private excelExportService: ExcelExportService
  ) {
    this.translate.use(localStorage.getItem('lang') || 'en');
    this.translate.get('download').subscribe((res: string) => {
      console.log(res);
    });
  }

  ngOnInit(): void {}

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status === 'done') {
      // todo
    } else if (status === 'removed') {
      // todo
    } else if (status === 'error') {
      file.error.statusText = TranslateData.fileUploadFail;
      this.messageService.add({
        severity: 'error',
        summary: TranslateData.fileUploadFail,
        detail: '',
      });
    }
  }

  handleDownloadFile = async (file: NzUploadFile): Promise<void> => {
    // @ts-ignore
    window.open(URL.createObjectURL(file?.originFileObj), '_blank');
  };

  download() {
    const dataList: Array<any> = [{ NO: 1 }, { NO: 2 }, { NO: 3 }];

    this.excelExportService.exp(dataList, [], 'Test');
  }

  async submitForm() {
    const valid = ['a'];
    // check null
    if (this.commonService.isInvalid(this.formData, valid)) {
      this.messageService.add({ severity: 'warn', summary: TranslateData.formValidMsg });
      this.formData.invalid = true;
    } else {
      this.messageService.add({
        severity: 'success',
        summary: TranslateData.saveSuccess,
      });

      // let data = await this.http.submit(this.formData);
      // if (data.code === 0) {
      //   this.messageService.add({
      //     severity: 'success',
      //     summary: TranslateData.saveSuccess,
      //   });
      // } else {
      //   this.messageService.add({ severity: 'error', summary: TranslateData.saveFail });
      // }
    }
  }
}
