
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { MostValuedComponent } from './components/most-valued/most-valued.component';
import { MovieComponent } from './components/movie/movie.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'pupular', component: PopularMoviesComponent },
  { path: 'valued', component: MostValuedComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pupular' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
