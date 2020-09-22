import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from '../clases/noticia';
import { ConectaService } from '../servicios/conecta.service';

@Component({
  selector: 'app-listar-noticia',
  templateUrl: './listar-noticia.component.html',
  styleUrls: ['./listar-noticia.component.css']
})
export class ListarNoticiaComponent implements OnInit {

  displayedColumns: string[] = ['titulo', 'texto', 'fecha','estado', 'editar'];
  dataSource: any[] = [];

  constructor(private router:Router,private conectaService: ConectaService,private route: ActivatedRoute) { }

  parametro:any;

  ngOnInit(): void {

  this.getNoticia();
  }


  // este metodo esta en el componente conecta.service.ts
    
  getNoticia() {
    this.conectaService.getNoticia().subscribe((noticias) => {
   
      this.dataSource = noticias;

      this.parametro = this.route.snapshot.params;

    if (Object.keys(this.parametro).length) {
      this.recibeNoticia(this.parametro);
    }

    });
  }

  recibeNoticia(r1: Noticia) {
      
      this.dataSource.push(r1);
    };


  goToEditar(user) {		
        this.router.navigate(["/app-noticia",user]);
      }
  

    
}
