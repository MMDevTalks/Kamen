import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';

@Component({
  selector: 'kdd-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
