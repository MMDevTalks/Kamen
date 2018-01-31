import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { SvgDefinitionsComponent } from './shared/components/svg-definitions/svg-definitions.component';
import { IconComponent } from './shared/components/icon/icon.component';
import { ButtonComponent } from './shared/components/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviePosterComponent,
    SvgDefinitionsComponent,
    IconComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
