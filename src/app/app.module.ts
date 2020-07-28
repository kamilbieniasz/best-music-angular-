import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SafePipeModule } from 'safe-pipe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { HitsComponent } from './pages/hits/hits.component';
import { GenresOfMusicComponent } from './pages/genres-of-music/genres-of-music.component';
import { MusicByGenreComponent } from './pages/genres-of-music/music-by-genre/music-by-genre.component';
import { RatingComponent } from './pages/rating/rating.component';
import { SongDetailsComponent } from './pages/hits/song-details/song-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HitsComponent,
    GenresOfMusicComponent,
    MusicByGenreComponent,
    RatingComponent,
    SongDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SafePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
