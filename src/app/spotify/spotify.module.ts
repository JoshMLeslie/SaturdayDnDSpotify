import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpotifyComponent} from './spotify.component';
import {SpotifyServiceApi} from './spotify.service.api';
import {SpotifyServiceFeature} from './spotify.service.feature';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpotifyComponent],
  providers: [
    SpotifyServiceApi
    , SpotifyServiceFeature
  ]
})
export class SpotifyModule { }
