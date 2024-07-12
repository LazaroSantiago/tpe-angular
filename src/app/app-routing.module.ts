import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPreviewComponent } from './list-preview/list-preview.component';
import { ItemMainComponent } from './item-main/item-main.component';

const routes: Routes = [
  {
    path: '',
    component: ItemMainComponent,
  },
  {
    path: 'main',
    component: ItemMainComponent,
  },
  {
    path: 'preview',
    component: ListPreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
