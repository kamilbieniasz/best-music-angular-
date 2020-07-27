import { Component, OnInit } from '@angular/core';
import { GetDBService } from 'src/app/services/get-db.service';
import { musicGenre } from '../../interfaces/musicGenre';

@Component({
  selector: 'app-genres-of-music',
  templateUrl: './genres-of-music.component.html',
  styleUrls: ['./genres-of-music.component.scss']
})
export class GenresOfMusicComponent implements OnInit {
  musicGenres: musicGenre[] = [];

  constructor(private musicGenreDB: GetDBService) { }

  ngOnInit(): void {
    this.getMusicGenre();
  }

  getMusicGenre(): void{
    this.musicGenreDB.getMusicGenre().subscribe(data => {
      this.musicGenres = data;
    });
  }

}
