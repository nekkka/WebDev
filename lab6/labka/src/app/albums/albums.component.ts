import { Component, OnInit } from '@angular/core';
import { Albums } from '../models';
import { ALBUMS } from '../fake-db';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { log } from 'console';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Albums[];
  loaded: boolean = false;
  constructor(private AlbumService: AlbumService){

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
