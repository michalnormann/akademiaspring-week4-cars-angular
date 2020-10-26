import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing-module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AddCarComponent } from './pages/add-car/add-car.component';
import {FormsModule} from '@angular/forms';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { EditCarComponent } from './pages/edit-car/edit-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    PageNotFoundComponent,
    AddCarComponent,
    CarDetailsComponent,
    EditCarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
