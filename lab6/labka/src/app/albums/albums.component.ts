import { Component, OnInit } from '@angular/core';
import { Albums } from '../models';
import { ALBUMS } from '../fake-db';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';

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
    this.loaded = false;
    this.AlbumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }
}
