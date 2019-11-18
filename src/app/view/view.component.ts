import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from '../Services/album-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  MyAlbums: any = [];
  constructor(private albumService: AlbumServiceService) { }

  ngOnInit() {
    this.albumService.GetAlbumInformation().subscribe((data) => {
      this.MyAlbums = data.Search;
      console.log(this.MyAlbums);
    })
  }

}