import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ALBUMS } from '../fake-db';
import { Albums } from '../models';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{

  album!: Albums;
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('albumId'));
      this.album = ALBUMS.find((album) => album.id === albumId) as Albums;
      
    })
  }

}
