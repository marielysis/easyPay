import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaidAccountPage } from './paid-account.page';

const routes: Routes = [
  {
    path: '',
    component: PaidAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaidAccountPageRoutingModule {}
