import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

import { MessageService } from './../../services/message.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public movies: any[] = [];
  public loading;
  constructor(
    private moviesService: MoviesService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  public searchMovie(name: string) {
    if (name.length === 0) {
      return this.movies = [];
    }

    this.loading = true;
    this.moviesService.searcMovie(name)
      .subscribe((response: any) => {
        this.movies = response.results;
        this.loading = false;
      }, (err) => {
        this.messageService.showError(err.error.status_message);

      });
  }

}
