import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';
import { PickupCallPageModule } from '../pickup-call/pickup-call.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PickupCallPageModule

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
