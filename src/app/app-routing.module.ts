import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HitsComponent } from './pages/hits/hits.component';
import { GenresOfMusicComponent } from './pages/genres-of-music/genres-of-music.component';
import { RatingComponent } from './pages/rating/rating.component';
import { MusicByGenreComponent } from './pages/genres-of-music/music-by-genre/music-by-genre.component';
import { SongDetailsComponent } from './pages/hits/song-details/song-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/hits', pathMatch: 'full'},
    { path: 'assets/music_db.json', redirectTo: '../assets/music_db.json', pathMatch: 'full'},
    { path: 'hits', component: HitsComponent },
    { path: 'hit/:id', component: SongDetailsComponent },
    { path: 'genres', component: GenresOfMusicComponent },
    { path: 'genre/:genre', component: MusicByGenreComponent},
    { path: 'rate', component: RatingComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
