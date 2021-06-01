import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutPageRoutingModule,
        HomePageModule
    ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
