import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';

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
      });
  }


}
