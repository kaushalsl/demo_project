import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {UserService} from '@servicesuser.service';

@Injectable({
  providedIn: 'root'
})
export class CountryResolver implements Resolve<any> {
  constructor(private userService: UserService, private route: Router) {
  }

  async resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('country-id');

    const countryData = await this.userService.getCountryById(id);
    if (countryData !== undefined) {
      return countryData;
    } else {
      this.route.navigate(['/resolverTest']).then();
      return null;
    }
  }
}
