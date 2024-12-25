import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegionsComponent } from './components/regions/regions.component';
import { RegionComponent } from './components/region/region.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
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
