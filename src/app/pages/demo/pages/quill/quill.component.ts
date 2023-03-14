import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateData } from '../../common/translate-data';
import video from '../../common/editor-video';
import { BigFileUploadService } from 'jabil-bus-lib';
declare var Quill: any;
Quill.register(video);

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.scss'],
  providers: [BigFileUploadService],
})

export class QuillComponent implements OnInit {
  submitLoading: boolean = false;
  formData: any = {};
  editor: any = {};
  modules: any = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ direction: 'rtl' }], // text direction

        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ['clean'], // remove formatting button
        ['image'],
        ['video'],
      ],
      handlers: {
        // handlers object will be merged with default handlers object
        video: function (value: any) {
          document.getElementById('file')?.click();
        },
      },
    },
  };
  quill: any = null;
  progress: number = 0;

  constructor(
    private translate: TranslateService,
    private bigFileUploadService: BigFileUploadService
  ) {
    this.translate.use(localStorage.getItem('lang') || 'en');
    this.translate.get('download').subscribe((res: string) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.editor = document.getElementById('editor');
    this.quill = new Quill(this.editor, {
      modules: this.modules,
      theme: 'snow',
      placeholder: TranslateData.input,
    });

    // set data
    // const qlEditor = document.getElementsByClassName('ql-editor')[0];
    // qlEditor!.innerHTML = '';

    //  get data
    //  this.editor?.getElementsByClassName('ql-editor')[0].innerHTML;
  }

  // add big video file
  async uploadFile(e: any, type: string) {
    if (e.target?.files[0]) {
      this.submitLoading = true;
      this.bigFileUploadService.inputFileChange(
        {
          file: e.target?.files[0],
          url: '',
        },
        (res: any) => {
          console.log('upload file success');
          // this.commonHttp.mergePageFiles(res).then((result: any) => {
          //   let index = this.quill.getSelection().index;
          //   this.quill.insertEmbed(index, type, {
          //     url: '',
          //     controls: 'controls',
          //     width: '100%',
          //     height: 'auto',
          //   });
          //   this.submitLoading = false;
          // });
        },
        (res: any) => {
          console.log('upload file error');
          this.submitLoading = false;
        },
        (num: number) => {
          this.progress = num;
        }
      );
    }
  }
}
