import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspaceClientPageRoutingModule } from './espace-client-routing.module';

import { EspaceClientPage } from './espace-client.page';
import { FooterComponentModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterComponentModule,
    EspaceClientPageRoutingModule,
  ],
  declarations: [EspaceClientPage]
})
export class EspaceClientPageModule {}
