import { Movie } from './../../models/movie.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
  @Input() items: Movie[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewMovie(id) {
    this.router.navigate(['movie', id]);
  }



}
