import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../../../interfaces/music.service';
import { GetDBService } from 'src/app/services/get-db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music-by-genre',
  templateUrl: './music-by-genre.component.html',
  styleUrls: ['./music-by-genre.component.scss']
})
export class MusicByGenreComponent implements OnInit {
  musics: Observable<Music[]>;

  constructor(private getDB: GetDBService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const genre = this.route.snapshot.paramMap.get('genre');
    this.musics = this.getDB.getMusicFromGenre(genre);
  }

}
