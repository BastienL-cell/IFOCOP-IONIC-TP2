import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';


@NgModule({
    declarations: [HeaderComponent],
    imports: [
        RouterModule,
        CommonModule,
        IonicModule
    ],
    exports: [HeaderComponent]
})

export class HeaderComponentModule {}