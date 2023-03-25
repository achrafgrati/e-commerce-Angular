import { Component } from '@angular/core';
import { Article } from 'src/app/Models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Categorie } from 'src/app/Models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent {
  articles:Article[]
  categories:Categorie[]; 
  term: string;
constructor(private artserv:ArticleService, private catserv: CategorieService){}

  ngOnInit() {
    this.Listart();
    this.loadCategories();
  }
Listart(){
this.artserv.getarticles().subscribe(data => this.articles= data),
(error:any) => console.log(error);
}
loadCategories () {
   return this.catserv.ListCategories().subscribe(data => { 
    this.categories = data ; } ),
     (err:any)=>console.log(err) 
    }

suppart(id:Object){
  return this.artserv.deletearticle(id).subscribe(data =>{this.Listart()})
}
addart(art :Article) {
  return this.artserv.addarticle(art).subscribe(data => {this.Listart()} )
}

}
