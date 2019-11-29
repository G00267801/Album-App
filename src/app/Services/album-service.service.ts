import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from '../Album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  constructor(private http:HttpClient) { }

  GetAlbumInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/albums');
  }

  SendAlbumInformation(name:string,year:string):Observable<any>{
    const album:Album = {name:name, year:year};
    return this.http.post('http://localhost:4000/api/albums', album)
  }

  DeleteAlbum(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/api/albums/'+id);
  }

  GetAlbum(id:String):Observable<any>{
    return this.http.get('http://localhost:4000/api/albums/'+id);
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       UpdateAlbums(id:String,title:string, year:string, poster:string):Observable<any>{
    const album:Album = {name:name, year:year};
    console.log("Edit"+id);
    return this.http.put('http://localhost:4000/api/albums/'+id, album);
  }

  
    UpdateAlbum(id:String,name:String,year:String):Observable<any> {
  
    console.log(name + "="+ year);
    const album:Album = {name:name, year:year};

    return this.http.put('http://localhost:4000/api/albums/'+id,album);
  }
}
