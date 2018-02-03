import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { IconComponent } from './components/icon/icon.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MoviePosterComponent, IconComponent, ButtonComponent],
  exports: [MoviePosterComponent, IconComponent, ButtonComponent]
})
export class SharedModule { }
