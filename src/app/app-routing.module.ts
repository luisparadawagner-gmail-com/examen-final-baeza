import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarNoticiaComponent } from './listar-noticia/listar-noticia.component';
import { NoticiaComponent } from './noticia/noticia.component';


const routes: Routes = [

  { path: 'app-noticia', component: NoticiaComponent  },
  { path: 'app-listar-noticia', component: ListarNoticiaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
