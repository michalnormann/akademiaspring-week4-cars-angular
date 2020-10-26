import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
})
export class CarListComponent implements OnInit {
  cars: Observable<Car[]>;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.cars = this.http.getCars();
  }
}

