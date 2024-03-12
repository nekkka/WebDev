import { Component, OnInit } from '@angular/core';
import { Albums } from '../models';
import { ALBUMS } from '../fake-db';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Albums[];
  constructor(){

  }
  ngOnInit(): void {
    this.albums = ALBUMS;
  }
}
