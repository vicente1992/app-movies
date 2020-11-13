

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movie: any = {};
  constructor(
    private moviesService: MoviesService,
    private router: ActivatedRoute
  ) {
    const id = this.router.snapshot.params.id;
    this.getMovie(id);
  }

  ngOnInit(): void {
  }
  /**
   * Obtener pelicula por su id
   */
  public getMovie(id) {
    this.moviesService.getMovieForId(id)
      .subscribe((response: any) => {
        this.movie = response;
      });
  }


}
