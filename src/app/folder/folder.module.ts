import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { AcceuilComponent } from '../acceuil/acceuil.component';
import { AccueilPageModule } from '../accueil/accueil.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    AccueilPageModule
  ],
  declarations: [FolderPage, FooterComponent, HeaderComponent, AcceuilComponent]
})
export class FolderPageModule {}
