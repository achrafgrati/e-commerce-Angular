import { Component, importProvidersFrom } from '@angular/core';
import { Categorie } from 'src/app/Models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertcategorie',
  templateUrl: './insertcategorie.component.html',
  styleUrls: ['./insertcategorie.component.css']
})
export class InsertcategorieComponent {
constructor(private catserv:CategorieService, private router:Router){}
categorie : Categorie = new Categorie();

ajoutcategorie=()=>{
  this.catserv.addcategorie(this.categorie).subscribe(data => this.router.navigate(['/lcategories']))
}


}
