import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { AcceuilComponent } from '../../components/acceuil/acceuil.component';
import { AccueilPageModule } from '../accueil/accueil.module';
import { FooterComponentModule } from 'src/app/components/footer/footer.module';
import { HeaderComponentModule } from 'src/app/components/header/header.module';
import { AcceuilComponentModule } from 'src/app/components/acceuil/acceuil.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceuilComponentModule,
    FooterComponentModule,
    HeaderComponentModule,
    FolderPageRoutingModule,
    AccueilPageModule
  ],
  declarations: [FolderPage, AcceuilComponent]
})
export class FolderPageModule {}
