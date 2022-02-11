import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent, children:[
    {
      path: 'billing',
      loadChildren: () => import('./billing/billing.module')
        .then(m => m.BillingModule),
    },
    { 
      path: 'merchant', 
      loadChildren: () => import('./merchant/merchant.module').
      then(m => m.MerchantModule) },
    { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) }
  ] },

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
