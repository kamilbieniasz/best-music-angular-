import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HitsComponent } from './pages/hits/hits.component';
import { GenresOfMusicComponent } from './pages/genres-of-music/genres-of-music.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
    { path: '', redirectTo: '/hits', pathMatch: 'full'},
    { path: 'music_genre', component: GenresOfMusicComponent },
    { path: 'search', component: SearchComponent },
    { path: 'hits', component: HitsComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}