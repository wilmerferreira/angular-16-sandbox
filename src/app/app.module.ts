import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionsComponent } from './components/regions/regions.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegionComponent } from './components/region/region.component';
import { ErrorComponent } from './components/error/error.component';
import { EstablishmentsComponent } from './components/establishments/establishments.component';
import { EstablishmentComponent } from './components/establishment/establishment.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    NotFoundComponent,
    RegionComponent,
    ErrorComponent,
    EstablishmentsComponent,
    EstablishmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
