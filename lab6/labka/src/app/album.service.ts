import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Albums[]>{
    return this.client.get<Albums[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(){
  
  }
}
