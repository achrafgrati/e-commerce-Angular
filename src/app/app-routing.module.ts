import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarticleComponent } from './articles/insertarticle/insertarticle.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { ListarticlestableComponent } from './articles/listarticlestable/listarticlestable.component';
import { ModifarticleComponent } from './articles/modifarticle/modifarticle.component';
import { InsertcategorieComponent } from './categories/insertcategorie/insertcategorie.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { ModifcategorieComponent } from './categories/modifcategorie/modifcategorie.component';
import { ListscategoriesComponent } from './scategories/listscategories/listscategories.component';

const routes: Routes = [
  {path:'larticles',component:ListarticlesComponent},
  {path:'lcategories',component:ListcategoriesComponent},
  {path:'lscategories',component:ListscategoriesComponent},
  {path:'lartcard',component:ListarticlescardComponent },
  {path:'insertart', component:InsertarticleComponent},
  {path: 'insertcat',component:InsertcategorieComponent},
  {path:'larttable',component:ListarticlestableComponent},
  {path: 'modifart/:id',component:ModifarticleComponent},
  {path:'modifcat/:id',component:ModifcategorieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
