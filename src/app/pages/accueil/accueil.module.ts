import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilPageRoutingModule } from './accueil-routing.module';

import { AccueilPage } from './accueil.page';
import { HeaderComponentModule } from 'src/app/components/header/header.module';
import { FooterComponentModule } from 'src/app/components/footer/footer.module';
import { AcceuilComponentModule } from 'src/app/components/acceuil/acceuil.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponentModule,
    FooterComponentModule,
    AcceuilComponentModule,
    IonicModule,
    AccueilPageRoutingModule
  ],
  declarations: [AccueilPage]
})
export class AccueilPageModule {}
