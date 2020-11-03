import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
  @Input() items: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
