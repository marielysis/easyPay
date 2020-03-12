import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcessingPageRoutingModule } from './processing-routing.module';

import { ProcessingPage } from './processing.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcessingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProcessingPage]
})
export class ProcessingPageModule {}
