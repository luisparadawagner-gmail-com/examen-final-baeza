import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from '../clases/noticia';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private router:Router) { }


  noticiaForm: FormGroup;
  parametro:any;
  
  noticia:Noticia;

  ngOnInit(): void {
    this.parametro= this.route.snapshot.params;
  

  if (Object.keys(this.parametro).length) {
    this.noticia = this.parametro;
  }

  this.initForm(this.noticia);
}



initForm (elemento : Noticia){

 this.noticiaForm = this.fb.group({
 titulo : [elemento ? elemento.titulo:''],
 texto : [elemento ? elemento.texto:''],
 fecha : [elemento? elemento.fecha:''],
 estado : [elemento? elemento.estado:''],
 
 }); 
};



cargarDatos(){
let noticia1 : Noticia = this.noticiaForm.value;
this.router.navigate(['app-listar-noticia', noticia1]);

};
 
}
