import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrudClientComponent} from './crud-client/crud-client.component';
import {CrudAdminComponent} from './crud-admin/crud-admin.component';
import {CrudEquipementComponent} from './crud-equipement/crud-equipement.component';
import {BillingComponent} from './billing/billing.component';
import {ContactComponent} from './contact/contact.component';
import {DashboardAdminComponent} from './dashboard-admin/dashboard-admin.component';
import {DashboardClientComponent} from './dashboard-client/dashboard-client.component';
import {DataAnalayticsComponent} from './data-analaytics/data-analaytics.component';
import {DataProcessComponent} from './data-process/data-process.component';

const routes: Routes = [
  { path: 'crudclient', component: CrudClientComponent },
  { path: 'crudadmin', component: CrudAdminComponent },
  { path: 'crudequipement', component: CrudEquipementComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboardadmin', component: DashboardAdminComponent },
  { path: 'dashboardclient', component: DashboardClientComponent },
  { path: 'dataanalytics', component: DataAnalayticsComponent },
  { path: 'dataprocess', component: DataProcessComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
