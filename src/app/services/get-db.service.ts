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
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getMusic(): Observable<Music[]> {
    return this.http.get<Music[]>(this.url + '/music');
  }

  getMusicGenre(): Observable<any> {
    return this.http.get(this.url + '/musicGenre');
  }

  getMusicFromGenre(genre: string): Observable<Music[]> {
    return this.getMusic().pipe(
      map(musics => musics.filter(music => music.type === genre))
    );
  }

  getSong(id: string): Observable<any> {
    return this.http.get(this.url + '/music/' + id);
  }

  patchVote(id: number, music: Partial<Music>): Observable<any> {
    return this.http.patch(this.url + '/music/' + id, music);
  }

  sortedBest(): Observable<Music[]>{
    return this.getMusic().pipe(
      map(results => results.sort((a, b) => a.vote > b.vote ? -1 : 1))
    );
  }

  sortedWorst(): Observable<Music[]>{
    return this.getMusic().pipe(
      map(results => results.sort((a, b) => a.vote > b.vote ? 1 : -1))
    );
  }

  bestOfThree(): Observable<Music[]> {
    return this.sortedBest().pipe(
      map(data => data.slice(0, 3))
    );
  }

  worstOfThree(): Observable<Music[]> {
    return this.sortedWorst().pipe(
      map(data => data.slice(0, 3))
    );
  }
}
