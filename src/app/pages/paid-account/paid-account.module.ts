import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaidAccountPageRoutingModule } from './paid-account-routing.module';

import { PaidAccountPage } from './paid-account.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaidAccountPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PaidAccountPage]
})
export class PaidAccountPageModule {}
