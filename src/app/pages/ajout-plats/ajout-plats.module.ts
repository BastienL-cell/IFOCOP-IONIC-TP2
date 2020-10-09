import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutPlatsPageRoutingModule } from './ajout-plats-routing.module';

import { AjoutPlatsPage } from './ajout-plats.page';
import { FooterComponentModule } from 'src/app/components/footer/footer.module';
import { HeaderComponentModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterComponentModule,
    HeaderComponentModule,
    AjoutPlatsPageRoutingModule
  ],
  declarations: [AjoutPlatsPage]
})
export class AjoutPlatsPageModule {}
