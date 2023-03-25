import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Categorie} from '../Models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  baseurl="http://localhost:3001/api/categories";
  constructor(private http:HttpClient) { }

  ListCategories():Observable<Categorie[]>

  {return this.http.get<Categorie[]>(this.baseurl);
  }

  deletecategorie(id:object):Observable<Categorie>{
    return this.http.delete<Categorie>(this.baseurl+ '/'+ id)
  }

  addcategorie (cat: Categorie ):Observable<Categorie>
  {
  return this.http.post<Categorie>(this.baseurl,cat)
  }
  getcategories(id:object):Observable<Categorie>

  {return this.http.get<Categorie>(this.baseurl+'/'+id);
  }
  updatecategorie(id:object,cat:Categorie):Observable<Categorie>{
    return this.http.put<Categorie>(this.baseurl +'/'+id,cat);
  }

}
