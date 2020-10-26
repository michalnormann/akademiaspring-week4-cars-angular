import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:8080/cars');
  }

  getCar(id: string): Observable<Car> {
    return this.http.get<Car>('http://localhost:8080/cars/' + id);
  }

  deleteCar(id: number): Observable<{}> {
    return this.http.delete('http://localhost:8080/cars/' + id);
  }


}
