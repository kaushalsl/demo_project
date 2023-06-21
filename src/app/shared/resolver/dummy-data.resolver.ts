import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class dummyDataResolver implements Resolve<any> {
  constructor(private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    console.log('Called Get Product in resolver...', route);
    if (localStorage.getItem('token') === null) {
      // this.router.navigate(['/signals']).then();
      return 'No data';
    }

    return 'Router resolver';
  }
}
