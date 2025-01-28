import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InboundMaterialsComponent } from './inbound-materials/inbound-materials.component';
import { AvailableMaterialsComponent } from './available-materials/available-materials.component';
import { OrderFulfillmentComponent } from './order-fulfillment/order-fulfillment.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'inbound-materials', component: InboundMaterialsComponent },
    { path: 'available-materials', component: AvailableMaterialsComponent },
    { path: 'order-fulfillment', component: OrderFulfillmentComponent },
    { path: 'profile', component: ProfileComponent },
  ];
  
