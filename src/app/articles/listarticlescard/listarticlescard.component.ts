import { Component } from '@angular/core';
import { Article } from 'src/app/Models/article';
import { ArticleService } from 'src/app/services/article.service';
@Component({
  selector: 'app-listarticlescard',
  templateUrl: './listarticlescard.component.html',
  styleUrls: ['./listarticlescard.component.css']
})
export class ListarticlescardComponent {
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
