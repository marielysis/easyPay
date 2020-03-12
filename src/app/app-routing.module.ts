import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'rut',
    loadChildren: () => import('./pages/rut/rut.module').then( m => m.RutPageModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./pages/accounts/accounts.module').then( m => m.AccountsPageModule)
  },
  {
    path: 'bank',
    loadChildren: () => import('./pages/bank/bank.module').then( m => m.BankPageModule)
  },
  {
    path: 'pin',
    loadChildren: () => import('./pages/pin/pin.module').then( m => m.PinPageModule)
  },
  {
    path: 'processing',
    loadChildren: () => import('./pages/processing/processing.module').then( m => m.ProcessingPageModule)
  },
  {
    path: 'paid-account',
    loadChildren: () => import('./pages/paid-account/paid-account.module').then( m => m.PaidAccountPageModule)
  },  {
    path: 'bank2',
    loadChildren: () => import('./pages/bank2/bank2.module').then( m => m.Bank2PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
