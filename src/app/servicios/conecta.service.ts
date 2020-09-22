import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectaService {

  constructor(private httpClient: HttpClient) {}
  
  getNoticia(): Observable<any> {
		return this.httpClient.get('./../assets/noticia.json');
	}


}
