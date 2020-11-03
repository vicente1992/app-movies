import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public movies: any[] = [];
  public loading;
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
  }

  public searchMovie(name: string) {
    this.loading = true;
    this.moviesService.searcMovie(name)
      .subscribe((response: any) => {
        this.movies = response.results;
        this.loading = false;
      })
  }

}
