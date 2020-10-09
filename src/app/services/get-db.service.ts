import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../interfaces/music.service';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { SlicePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GetDBService {
  private url = 'https://bestmusicapp-db.herokuapp.com/';

  constructor(private http: HttpClient) { }


  getMusic(): Observable<any> {
    return this.http.get(this.url + 'music');
  }

  getMusicGenre(): Observable<any> {
    return this.http.get(this.url + 'musicGenre');
  }

  getMusicFromGenre(genre: string): Observable<Music[]> {
    return this.getMusic().pipe(
      map(musics => musics.filter(music => music.type === genre))
    );
  }

  getSong(id: string): Observable<any> {
    return this.http.get(this.url + 'music/' + id);
  }

  patchVote(id: number, music: Partial<Music>): Observable<any> {
    return this.http.patch(this.url + 'music/' + id, music);
  }

  sorted(flag: string): Observable<Music[]> {
    if (flag === 'b') {
      return this.getMusic().pipe(
        map(results => results.sort((a, b) => a.vote > b.vote ? -1 : 1))
      );
    }
    else if (flag === 'w') {
      return this.getMusic().pipe(
        map(results => results.sort((a, b) => a.vote > b.vote ? 1 : -1))
      );
    }
  }

  ofThree(flag: string): Observable<Music[]> {
    return this.sorted(flag).pipe(
      map(data => data.slice(0, 3))
    );
  }
}
