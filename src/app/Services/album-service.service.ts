import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from '../album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  constructor(private http:HttpClient) { }

  GetAlbumInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/albums');
  }

  AddAlbumInformation(title:string,year:string,poster:string):Observable<any>{
    const album:Album = {title:title, year:year, poster:poster};
    return this.http.post('http://localhost:4000/api/albums', album)
  }


}