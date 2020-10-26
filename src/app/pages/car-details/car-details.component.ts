import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Car } from 'src/app/models/car';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {HttpService} from '../../services/http.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
})
export class CarDetailsComponent implements OnInit {
  carDetails: Observable<Car>;

  constructor(private http: HttpService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    this.carDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getCar(params.get('id')))
    );
  }

  goToCars() {
    this.router.navigate(['/cars']);
  }

  delete(id: number) {
    this.http.deleteCar(id).subscribe();
    alert('Car deleted.');
    this.location.back();
  }
}
