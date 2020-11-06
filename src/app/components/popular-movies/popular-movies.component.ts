import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';

import { MessageService } from './../../services/message.service';
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  public movies: any[] = [];
  public loading: boolean = true;
  constructor(
    private moviesService: MoviesService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.getPopularMovies();
  }
  public getPopularMovies() {
    this.moviesService.getPopularMovies()
      .subscribe((response: any) => {
        this.loading = false;
        this.movies = response.results;
      }, (err) => {
        this.messageService.showError(err.error.status_message);
      });
  }


}
