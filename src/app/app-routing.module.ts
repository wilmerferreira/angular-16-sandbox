import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegionsComponent } from './components/regions/regions.component';
import { RegionComponent } from './components/region/region.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorComponent } from './components/error/error.component';
import { EstablishmentsComponent } from './components/establishments/establishments.component';
import { EstablishmentComponent } from './components/establishment/establishment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'establishments', component: EstablishmentsComponent },
  { path: 'establishment/:id', component: EstablishmentComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'region/:id', component: RegionComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
