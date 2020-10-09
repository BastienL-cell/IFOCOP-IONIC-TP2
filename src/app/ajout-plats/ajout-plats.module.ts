import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutPlatsPageRoutingModule } from './ajout-plats-routing.module';

import { AjoutPlatsPage } from './ajout-plats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutPlatsPageRoutingModule
  ],
  declarations: [AjoutPlatsPage]
})
export class AjoutPlatsPageModule {}
