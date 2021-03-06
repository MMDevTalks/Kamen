import { Component, OnInit, Input, EventEmitter, Output, HostBinding } from '@angular/core';

@Component({
  selector: 'kdd-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  @Input() movie: any;
  @Output() selectMovie: EventEmitter<any> = new EventEmitter();
  @Output() movieDetailsShown: EventEmitter<any> = new EventEmitter();
  @HostBinding('class.movie-poster--active') @Input() isSelected = false;
  constructor() { }

  ngOnInit() {
  }

  clickMoviePoster($event, movie) {
    this.selectMovie.emit(movie);
  }

  showMovieDetails(movie: any) {
    this.movieDetailsShown.emit(movie);
  }

}
