import { Component } from '@angular/core';
import { Scategorie } from 'src/app/Models/scategorie';
import { ScategorieService } from 'src/app/services/scategorie.service';

@Component({
  selector: 'app-listscategories',
  templateUrl: './listscategories.component.html',
  styleUrls: ['./listscategories.component.css']
})
export class ListscategoriesComponent {
  scategories:Scategorie[];
  constructor(private scatserv:ScategorieService){}

  ngOnInit() {
    return this.scatserv.Listscategories().subscribe (data => this.scategories = data),
    (err:any) => console.log(err)
    }
    
}
