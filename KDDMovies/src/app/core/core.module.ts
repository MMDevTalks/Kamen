import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { AccountService } from './services/account.service';
import { APP_INITIALIZER } from '@angular/core';
import { accountLoader } from './account.loader';
import { AnonymousGuard } from './guards/anonymous.guard';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    AuthService,
    AuthGuard,
    AnonymousGuard,
    AccountService,
    {
      provide: APP_INITIALIZER,
      useFactory: accountLoader,
      deps: [AuthService],
      multi: true
    }
  ],
  declarations: [
    SvgDefinitionsComponent,
  ],
  exports: [
    SvgDefinitionsComponent
  ]
})
export class CoreModule { }
