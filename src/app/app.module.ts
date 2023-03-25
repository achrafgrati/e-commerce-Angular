import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { InsertcategorieComponent } from './categories/insertcategorie/insertcategorie.component';
import { ModifcategorieComponent } from './categories/modifcategorie/modifcategorie.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { InsertarticleComponent } from './articles/insertarticle/insertarticle.component';
import { ModifarticleComponent } from './articles/modifarticle/modifarticle.component';
import { ListscategoriesComponent } from './scategories/listscategories/listscategories.component';
import { InsertscategorieComponent } from './scategories/insertscategorie/insertscategorie.component';
import { ModifscategorieComponent } from './scategories/modifscategorie/modifscategorie.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { FormsModule } from '@angular/forms';
import { ListarticlestableComponent } from './articles/listarticlestable/listarticlestable.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListcategoriesComponent,
    InsertcategorieComponent,
    ModifcategorieComponent,
    ListarticlesComponent,
    InsertarticleComponent,
    ModifarticleComponent,
    ListscategoriesComponent,
    InsertscategorieComponent,
    ModifscategorieComponent,
    ListarticlescardComponent,
    ListarticlestableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
