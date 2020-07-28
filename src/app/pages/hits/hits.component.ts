import { Component, OnInit } from '@angular/core';
import { GetDBService } from '../../services/get-db.service';
import { Music } from '../../interfaces/music.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hits',
  templateUrl: './hits.component.html',
  styleUrls: ['./hits.component.scss']
})
export class HitsComponent implements OnInit {
  musics: Music[];

  constructor(private musicDB: GetDBService) { }

  ngOnInit(): void {
    this.getMusic();
  }

  getMusic(): void{
    this.musicDB.getMusic().subscribe( data =>
      this.musics = data);
  }

  voting(index: number, changeVote: number): void {
    this.musics[index].vote += changeVote;
    const music: Partial<Music> = {
      vote: this.musics[index].vote
    };
    this.musicDB.patchVote(this.musics[index].id, music).subscribe();
  }

}
