import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../interfaces/music.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDBService{
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  getMusic(): Observable<any>{
    return this.http.get(this.url + '/music');
  }

  getMusicGenre(): Observable<any>{
    return this.http.get(this.url + '/musicGenre');
  }

  getMusicFromGenre(genre: string): Observable<Music[]>{
    return this.getMusic().pipe(
      map(musics => musics.filter(music => music.type === genre))
    );
  }

  getSong(id: string): Observable<any>{
    return this.http.get(this.url + '/music/' + id);
  }
}
