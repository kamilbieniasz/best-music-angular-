import { Component, OnInit } from '@angular/core';
import { GetDBService } from 'src/app/services/get-db.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Music } from '../../../interfaces/music.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {
  songDetails: Observable<Music>;

  constructor(private getDB: GetDBService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.songDetails = this.getDB.getSong(id);
  }

}
