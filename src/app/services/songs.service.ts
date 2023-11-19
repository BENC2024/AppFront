import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

   httpClient = inject(HttpClient)
   baseURl = 'http://localhost:3000/api/songs'

   constructor() { } // se puede injectar tambien en el constructor las instancias de el modulo

   getAll() {
      //Transformar un observable en una promesa de muchos a uno
      return firstValueFrom( //Convierte el primer valor que devuelva el observable en una promesa
         this.httpClient.get<any[]>(this.baseURl) //[] se especifica el tipo que esta devolviendo, en este caso un array
      );
   }

   getById(songId: String){
      return firstValueFrom( //Convierte el primer valor que devuelva el observable en una promesa
         this.httpClient.get<any>(`${this.baseURl}/${songId}`) //[] se especifica el tipo que esta devolviendo en este caso un unico valor
      );
   }


   

}
