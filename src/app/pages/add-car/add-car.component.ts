import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/models/car';



@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
})
export class AddCarComponent implements OnInit {

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
  }

  add(data) {
    this.http.post<Car>('http://localhost:8080/cars', data).subscribe((result: Car) => {
      this.router.navigate(['/car/' + result.id]);
    });
  }
}
