import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form.component';
import {form, formValidation, ngxFormly} from '@shared/metaKeyWords';

const routes: Routes = [
  {path: '', component: FormComponent},
  {
    path: 'simple-form',
    loadChildren: () => import('./simple-form/simple-form.module').then(m => m.SimpleFormModule),
    data: form
  },
  {
    path: 'form-validation',
    loadChildren: () => import('@layout/form/form-validation/form-validation.module').then(m => m.FormValidationModule),
    data: formValidation
  },
  {
    path: 'forms',
    loadChildren: () => import('@layout/form/forms/forms.module').then(m => m.FormsModules),
    data: ngxFormly
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {
}
