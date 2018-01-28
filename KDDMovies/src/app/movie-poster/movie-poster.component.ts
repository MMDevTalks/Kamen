import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdd-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  @Input() movie: any = {};
  constructor() { }

  ngOnInit() {
  }

}
