import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutPageRoutingModule } from './rut-routing.module';

import { RutPage } from './rut.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RutPage]
})
export class RutPageModule {}
