import { EditCarComponent } from './pages/edit-car/edit-car.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarListComponent} from './pages/car-list/car-list.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {AddCarComponent} from './pages/add-car/add-car.component';
import {CarDetailsComponent} from './pages/car-details/car-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/cars', pathMatch: 'full'},
  {path: 'cars', component: CarListComponent},
  {path: 'car/:id', component: CarDetailsComponent},
  {path: 'addcar', component: AddCarComponent},
  {path: 'edit/:id', component: EditCarComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{}
