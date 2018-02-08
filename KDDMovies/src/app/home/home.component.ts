import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


@Component({
  selector: 'kdd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movies$: Observable<Array<any>>;
  public selectedMovie: any;

  constructor(private _movieService: MovieService, private _router: Router) { }

  selectMovie(movie) {
    this.selectedMovie = movie;
  }

  showMovieDetails(movie) {
    this._router.navigate([{outlets: { 'sidebar': `details/${movie.id}`}}]);
  }

  ngOnInit() {
      this.movies$ = this._movieService.getNowPlayingMovies();
  }
}
