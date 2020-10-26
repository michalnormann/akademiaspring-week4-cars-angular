import { HttpService } from './../../services/http.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Car } from 'src/app/models/car';
import {Location} from '@angular/common';


@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
})
export class EditCarComponent implements OnInit {
  carEdit: Observable<Car>;

  constructor(private http: HttpClient, private servicehttp: HttpService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit(): void {
      this.carEdit = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.servicehttp.getCar(params.get('id')))
      );
    }

    saveEditedCar(id,data) {
      this.http.patch('http://localhost:8080/cars/' + id, data).subscribe();
      this.location.back();
    }

}
