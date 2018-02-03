import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MovieService } from './services/movie.service';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  providers: [
    MovieService
  ],
  declarations: [
    HeaderComponent,
    SvgDefinitionsComponent
  ],
  exports: [
    HeaderComponent,
    SvgDefinitionsComponent
  ]
})
export class CoreModule { }
