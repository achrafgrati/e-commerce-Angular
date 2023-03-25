import { Component } from '@angular/core';
import { Article } from 'src/app/Models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { ScategorieService } from 'src/app/services/scategorie.service';
import { Scategorie } from 'src/app/Models/scategorie';
@Component({
  selector: 'app-insertarticle',
  templateUrl: './insertarticle.component.html',
  styleUrls: ['./insertarticle.component.css']
})
export class InsertarticleComponent {
  constructor(private artserv:ArticleService , private router:Router, private scatserv:ScategorieService){}
  article : Article = new Article()
  scategorie : Scategorie[]
ngOnInit(){ 
  this.article.reference="100" /* pour initialiser le valeur de reference*/
  this.loadscategorie()
}
loadscategorie(){

   return this.scatserv.getscategories().subscribe(data => this.scategorie= data),
    (error:any) => console.log(error);
}


ajoutarticle=()=>{
  this.artserv.addarticle(this.article).subscribe(data => this.router.navigate(['/larticles']))
}

}
