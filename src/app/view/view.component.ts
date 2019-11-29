import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from '../Services/album-service.service';
import {Router, ActivatedRoute} from '@angular/router';

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
      this.MyAlbums = data.albums;
      console.log(this.MyAlbums);
    })
  }

  onDelete(id:String){
    console.log("Deleting album with id:" +id);
    this.albumService.DeleteAlbum(id).subscribe();
  }

}