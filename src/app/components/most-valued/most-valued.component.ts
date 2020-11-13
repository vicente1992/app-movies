import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MessageService } from './../../services/message.service';
import { Movie } from './../../models/movie.interface';

@Component({
  selector: 'app-most-valued',
  templateUrl: './most-valued.component.html',
  styleUrls: ['./most-valued.component.css']
})
export class MostValuedComponent implements OnInit {
  public valuedMovies: Movie[] = [];
  public loading: boolean = true;
  constructor(
    private moviesService: MoviesService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }
  public getPopularMovies() {
    this.moviesService.getMostValued()
      .subscribe((response: any) => {
        this.loading = false;
        this.valuedMovies = response.results;
      }, (err) => {
        this.messageService.showError(err.error.status_message);
      });
  }

}
