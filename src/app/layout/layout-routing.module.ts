import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {dummyDataResolver} from '@shared/resolver/dummy-data.resolver';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'form', pathMatch: 'prefix'},
      {path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule)},
      {path: 'signals', loadChildren: () => import('./signals/signals.module').then(m => m.SignalsModule)},
      {
        path: 'component-binding/:userId',
        loadChildren: () => import('./component-binding/component-binding.module').then(m => m.ComponentBindingModule),
        data: {
          title: 'Component Binding'
        },
        resolve: {
          /* dummy_data: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, router: Router) => {
             if (localStorage.getItem('token') === null) {
               // this.router.navigate(['/signals']).then();
               return 'No data';
             }

             return 'Router resolver';
           }*/
          dummy_data: dummyDataResolver
        }
      },
      {
        path: 'zone',
        loadChildren: () => import('./zone/zone.module').then(m => m.ZoneModule)
      },
      {
        path: 'typescript',
        loadChildren: () => import('./typescript/typescript.module').then(m => m.TypescriptModule)
      },
      {
        path: 'lodashjs',
        loadChildren: () => import('./lodashjs/lodashjs.module').then(m => m.LodashjsModule)
      },
      {path: 'medicine', loadChildren: () => import('./medicine/medicine.module').then(m => m.MedicineModule)},
      {
        path: 'regular-expression',
        loadChildren: () => import('./regular-expression/regular-expression.module').then(m => m.RegularExpressionModule)
      },
      {
        path: 'resolverTest',
        loadChildren: () => import('./resolver-test/resolver-test.module').then(m => m.ResolverTestModule)
      },
      {
        path: 'rxjs-operator',
        loadChildren: () => import('./rxjs-operator/rxjs-operator.module').then(m => m.RxjsOperatorModule)
      },
      {
        path: 'image-optimization',
        loadChildren: () => import('./image-optimization/image-optimization.module').then(m => m.ImageOptimizationModule)
      },
      {
        path: 'calender',
        loadChildren: () => import('./calender/calender.module').then(m => m.CalenderModule),
      },
      {
        path: 'rxjs',
        loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
