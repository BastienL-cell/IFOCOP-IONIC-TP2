import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutPlatsPage } from './ajout-plats.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutPlatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutPlatsPageRoutingModule {}
