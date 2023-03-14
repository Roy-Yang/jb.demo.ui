import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { FormComponent } from './pages/form/form.component';
import { TableComponent } from './pages/table/table.component';
import { QuillComponent } from './pages/quill/quill.component';

const routes: Routes = [
  // set '/demo' in app-routing.module
  // set data in menu.json
  { path: '', pathMatch: 'full', redirectTo: '/demo/page1' },
  { path: 'page1', component: Page1Component },
  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent },
  { path: 'quill', component: QuillComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
