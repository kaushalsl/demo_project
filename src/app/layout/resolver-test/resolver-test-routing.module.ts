import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResolverTestComponent} from './resolver-test.component';
import {DetailsComponent} from './details/details.component';
import {CountryResolver} from '@shared/guard/user.guard';

const routes: Routes = [
  {
    path: '',
    component: ResolverTestComponent,
    children: [
      {
        path: 'details/:country-id',
        component: DetailsComponent,
        resolve: {countryDetails: CountryResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolverTestRoutingModule {
}
