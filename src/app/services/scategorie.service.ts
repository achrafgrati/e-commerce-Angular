import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scategorie } from '../Models/scategorie';
@Injectable({
  providedIn: 'root'
})
export class ScategorieService {
baseurl="http://localhost:3001/api/scategories"
  constructor(private http:HttpClient) { }

  Listscategories():Observable<Scategorie[]>
  {
    return this.http.get<Scategorie[]>(this.baseurl)
  }
  getscategories():Observable<Scategorie[]>{
    return this.http.get<Scategorie[]>(this.baseurl)
  }
}
