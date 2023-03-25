import { Component } from '@angular/core';
import { Categorie } from 'src/app/Models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {
  
  categories:Categorie[];
constructor(private catserv:CategorieService){}

ngOnInit() {
/*return this.catserv.ListCategories().subscribe(data => this.categories = data),
(err:any) => console.log(err)*/
this.Listcat()

}
Listcat(){
  this.catserv.ListCategories().subscribe(data => this.categories= data),
  (error:any) => console.log(error);
  }
suppcat(id:Object){
  return this.catserv.deletecategorie(id).subscribe(data =>{this.Listcat()})
}
addcat(cat :Categorie) {
  return this.catserv.addcategorie(cat).subscribe(data => {this.Listcat()} )
}

}
