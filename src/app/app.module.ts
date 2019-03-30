import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SpotifyModule} from './spotify/spotify.module';
import {HomeModule} from './home/home.module';
import {LandingModule} from './landing/landing.module';
import {ModuleRouting} from './app.router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule
    , SpotifyModule
    , ModuleRouting // start - modules w/ routing
    , LandingModule
    , HomeModule // end - modules w/ routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
