import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilPageModule } from '../accueil/accueil.module';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children: [
      {
        path: 'accueil',
        children: [
          {
            path: "",
            loadChildren: () => import('../accueil/accueil.module').then(m => m.AccueilPageModule)
          }
        ]
      }
    ]
  },
  {
    path: 'folder/carte',
    component: AccueilPageModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule { }
