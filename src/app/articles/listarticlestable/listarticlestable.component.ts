import { Component } from '@angular/core';
import { Article } from 'src/app/Models/article';
import { ArticleService } from 'src/app/services/article.service';
@Component({
  selector: 'app-listarticlestable',
  templateUrl: './listarticlestable.component.html',
  styleUrls: ['./listarticlestable.component.css']
})
export class ListarticlestableComponent {
  articles:Article[]
  constructor(private artserv:ArticleService){}
  
    ngOnInit() {
      this.Listart()
      
    }
    Listart(){
      this.artserv.getarticles().subscribe(data => this.articles= data),
      (error:any) => console.log(error);
      }

}
