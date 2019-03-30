import { Component, OnInit } from '@angular/core';
import {SpotifyServiceFeature} from '../spotify/spotify.service.feature';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyServiceFeature
  ) { }

  ngOnInit() {
  }

  goAuth() {
    return this.spotifyService.authUrl;
  }
}
