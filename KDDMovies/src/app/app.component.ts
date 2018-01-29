import { Component, OnInit } from '@angular/core';
import { MovieService } from './core/movie.service';

@Component({
  selector: 'kdd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'kdd';
  movies = [];
  selectedMovie: any = null;

  constructor(private _movieService: MovieService) {

  }

  selectMovie(movie) {
    this.selectedMovie = movie;
  }

  ngOnInit() {
    this._movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }
}
