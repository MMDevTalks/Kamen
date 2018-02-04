import { SharedModule } from '../app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
