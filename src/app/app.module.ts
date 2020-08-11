import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudAdminComponent } from './crud-admin/crud-admin.component';
import { CrudClientComponent } from './crud-client/crud-client.component';
import { CrudEquipementComponent } from './crud-equipement/crud-equipement.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DataProcessComponent } from './data-process/data-process.component';
import { DataAnalayticsComponent } from './data-analaytics/data-analaytics.component';
import { ContactComponent } from './contact/contact.component';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudAdminComponent,
    CrudClientComponent,
    CrudEquipementComponent,
    DashboardAdminComponent,
    DashboardClientComponent,
    DataProcessComponent,
    DataAnalayticsComponent,
    ContactComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
