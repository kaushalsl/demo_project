import {APP_INITIALIZER, Injector, NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '@shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppService} from '@servicesapp.service';
import {ToastrModule} from 'ngx-toastr';
import {ConfigService} from '@servicesconfig.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '@shared/guard/auth.inteceptor';
import {LoaderInterceptor} from '@shared/guard/loader-interceptor.service';
import {DatePipe} from '@angular/common';
import {CanDeactivateGuard} from '@shared/guard/can-deactivate-guard.service';
import {BackButtonDisableModule} from 'angular-disable-browser-back-button';

export let AppInjector: Injector;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false}),
    SharedModule,
    NgbModule,
    // BackButtonDisableModule.forRoot()
  ],
  providers: [
    DatePipe,
    provideClientHydration(),
    CanDeactivateGuard
    /* [{
       provide: APP_INITIALIZER,
       deps: [ConfigService],
       useFactory: (configService: ConfigService) => {
         return () => {
           return configService.load();
         };
       },
       multi: true
     }],
     [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
     [{provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}],*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}
