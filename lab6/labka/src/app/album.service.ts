import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  //BASE_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Albums[]>{
    return this.client.get<Albums[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable <Albums>{
    return this.client.get<Albums>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  deleteAlbum(id: number){
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
}
