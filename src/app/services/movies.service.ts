import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private base_url: string = environment.base_url;
  private base_url_search: string = environment.base_url_search;
  private api_key: string = environment.api_key;
  constructor(private httClient: HttpClient) { }


  /**
   Peliculas mas popular
 */
  getPopularMovies() {
    return this.httClient.get(this.base_url + `/popular?api_key=${this.api_key}&language=es`)
  }
  /**
   Peliculas mas valoradas
 */
  getMostValued() {
    return this.httClient.get(this.base_url + `/top_rated?api_key=${this.api_key}&language=es`)
  }

  /**
   * Buscar pelicula
   */

  searcMovie(query: string) {
    return this.httClient.get(this.base_url_search + `?api_key=${this.api_key}&query=${query}&language=es`)
  }
  /**
   * Obtener pelicula por id
   * ${movieID}?api_key=${apiKey}&language=es-ES
   */
  getMovieForId(id) {
    return this.httClient.get(this.base_url + `/${id}?api_key=${this.api_key}&language=es`)
  }

}
