import { Component, Injectable, inject, signal } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent {

   arrSongs = signal<any[]>([]) //Crea una variable , y avisa cuando se modifica esa variable
   //Cuadre con el tipo que se extrae del http client
   
   songService = inject(SongsService)

   async ngOnInit(){ //Se cargan las canciones cuando se carga el componente
      const songs = await this.songService.getAll()
      this.arrSongs.set(songs)
      console.log(songs)
   }

}
