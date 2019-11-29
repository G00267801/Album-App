import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {AlbumServiceService} from '../Services/album-service.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
album:any=[];
  constructor(private albumService:AlbumServiceService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.albumService.GetAlbum(this.route.snapshot.params['id']).subscribe((data) =>{
          this.album = data;
          console.log(this.album);
      }
    )}

  onEditAlbum(form: NgForm) {
    console.log(form.value.title);
    this.albumService.UpdateAlbum(this.album._id,form.value.name,
      form.value.year).subscribe();
    }
}
