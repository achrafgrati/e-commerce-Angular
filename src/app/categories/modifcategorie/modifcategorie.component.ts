import { Component } from '@angular/core';
import { Categorie } from 'src/app/Models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifcategorie',
  templateUrl: './modifcategorie.component.html',
  styleUrls: ['./modifcategorie.component.css']
})
export class ModifcategorieComponent {
  id:any;

constructor(private catserv:CategorieService, private router : Router, private actrouter:ActivatedRoute){}
categorie : Categorie = new Categorie()

modifcategorie=()=>{
  this.catserv.updatecategorie(this.id , this.categorie).subscribe(data => this.router.navigate(['/lcategories']) ),
  (error:any) => console.log(error);


}
ngOnInit():void {
  this.id= this.actrouter.snapshot.paramMap.get('id');
  this.catserv.getcategories(this.id).subscribe(data =>this.categorie = data ),
  (error:any) => console.log(error);
  /*console.log(this.id)*/
}

}
