
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { ImagePipe } from './pipes/image.pipe';
import { HeaderComponent } from './shared/header/header.component';
import { ListMovieComponent } from './shared/list-movie/list-movie.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { MostValuedComponent } from './components/most-valued/most-valued.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadersComponent } from './shared/loaders/loaders.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListMovieComponent,
    FooterComponent,
    PopularMoviesComponent,
    MostValuedComponent,
    ImagePipe,
    LoadersComponent,
    SearchComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
