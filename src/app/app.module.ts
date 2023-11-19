import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsListComponent } from './component/songs/songs-list/songs-list.component';
import { DetailSongComponent } from './component/songs/detail-song/detail-song.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    DetailSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
