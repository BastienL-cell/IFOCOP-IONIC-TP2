import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AcceuilComponent } from "./acceuil.component";

@NgModule({
    declarations: [AcceuilComponent],
    imports: [CommonModule, IonicModule],
    exports: [AcceuilComponent]
})

export class AcceuilComponentModule {}