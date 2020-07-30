import { Component, OnInit } from '@angular/core';
import { GetDBService } from 'src/app/services/get-db.service';
import { Music } from '../../interfaces/music.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  musicsBest: Music[];
  musicsWorst: Music[];

  constructor(private musicDB: GetDBService) { }

  ngOnInit(): void {
   this.musicDB.ofThree('b').subscribe(data => this.musicsBest = data);
   this.musicDB.ofThree('w').subscribe(data => this.musicsWorst = data);
  }

}
