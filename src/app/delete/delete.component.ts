import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from '../Services/album-service.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  MyAlbums: any = [];
  constructor(private albumService: AlbumServiceService) { }

  ngOnInit() {
    this.albumService.GetAlbumInformation().subscribe((data) => {
      this.MyAlbums = data.albums;
      console.log(this.MyAlbums);
    })
  }

  onDelete(id:String){
    console.log("Deleting album with id: "+id);
    this.albumService.DeleteAlbum(id).subscribe();
  }

}
