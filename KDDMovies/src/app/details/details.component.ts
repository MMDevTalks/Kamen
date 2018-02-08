import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../core/services/movie.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'kdd-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movie$: Observable<any>;
  constructor( private _route: ActivatedRoute, private _movieService: MovieService) { }

  ngOnInit() {
    this.movie$ = this._route.params.switchMap(params =>
      this._movieService.getMovieById(params.id)
    );
  }

}
