import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrls: ['./detail-song.component.css']
})
export class DetailSongComponent {

   activatedRoute = inject(ActivatedRoute) // Permite acceder a las partes variables de la URL
   songsService = inject(SongsService)

   song = signal<any>({})

   ngOnInit(){
      this.activatedRoute.params.subscribe( async params => {
         const song = await this.songsService.getById(params['songId']) //songId esta definida dentro de las rutas
         console.log(song)
         this.song.set(song)
      })
   }

}
