import { Component, OnInit } from '@angular/core';
import { Albums } from '../models';
import { ALBUMS } from '../fake-db';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { log } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Albums[];
  title: string;
  loaded: boolean = false;
  constructor(private AlbumService: AlbumService){
    this.newAlbum = {
      id: 101,
      title: '',
      body: ''
    }
  }
  ngOnInit(): void {
    //this.albums = ALBUMS;
    this.getAlbums();
  }

  
  getAlbums(){
    this.loaded = false;
    this.AlbumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });

  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((p)=> p.id !== id);
    this.AlbumService.deleteAlbum(id).subscribe(()=>{
      console.log('deleted');
    })
  }
}
