import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AlbumServiceService } from '../Services/album-service.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private albumService: AlbumServiceService) { }

  ngOnInit() {
  }

  onAddAlbum(form: NgForm) {
    console.log(form.value);

    this.albumService.AddAlbumInformation(form.value.title,
      form.value.year, form.value.poster).subscribe();
    console.log(form.value);
    form.resetForm();
  }

}
