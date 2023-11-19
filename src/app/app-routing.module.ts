import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsListComponent } from './component/songs/songs-list/songs-list.component'
import { DetailSongComponent } from './component/songs/detail-song/detail-song.component';

const routes: Routes = [
   { path: 'songs', component: SongsListComponent},
   { path: 'songs/:songId', component: DetailSongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
