import { Component } from '@angular/core';
import { Article } from 'src/app/Models/article';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifarticle',
  templateUrl: './modifarticle.component.html',
  styleUrls: ['./modifarticle.component.css']
})
export class ModifarticleComponent {
  id:any;
  constructor(private artserv:ArticleService , private actrouter:ActivatedRoute,private router :Router ){}
  article : Article = new Article()
 
  modifarticle=()=>{
    this.artserv.Updatearticle(this.id , this.article).subscribe(data => this.router.navigate(['/larticles']) ),
    (error:any) => console.log(error);


  }
  ngOnInit():void {
    this.id= this.actrouter.snapshot.paramMap.get('id');
    this.artserv.getarticlebyId(this.id).subscribe(data =>this.article = data ),
    (error:any) => console.log(error);
    /*console.log(this.id)*/
  }
  
}
