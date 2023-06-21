import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Country} from './country';
import {map} from 'rxjs/operators';

const COUNTRIES: Country[] = [
  {id: 1, name: 'India'}, {id: 2, name: 'Pakistan'}
];

let countriesObservable = of(COUNTRIES);
let countriesDisplayObservable = of(COUNTRIES.concat({id: 3, name: 'Uk'}));

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getCountries(): Observable<Country[]> {
    return countriesDisplayObservable;
  }

  getCountryById(id: any) {
    return countriesObservable.pipe(map(data => data.find((country: any) => country.id == id))).toPromise();
  }
}
