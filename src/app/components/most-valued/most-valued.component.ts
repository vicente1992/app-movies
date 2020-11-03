import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-most-valued',
  templateUrl: './most-valued.component.html',
  styleUrls: ['./most-valued.component.css']
})
export class MostValuedComponent implements OnInit {
  public valuedMovies: any[] = [];
  public loading: boolean = true;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }
  public getPopularMovies() {
    this.moviesService.getMostValued()
      .subscribe((response: any) => {
        this.loading = false;
        this.valuedMovies = response.results;
      })
  }

}
