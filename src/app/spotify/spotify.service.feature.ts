import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {IAuthorizationMap} from './spotify.service.api';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceFeature {
  // frontend service

  private _accessToken: string;
  private _expiration: number;
  private _tokenType: string;
  private _state: string;

  constructor() { }

  get headers() {
    return new HttpHeaders({
      Authorization: `${this._tokenType} ${this._accessToken}`
    });
  }

  get authUrl() {
    const url = 'https://accounts.spotify.com/authorize';
    const params = {
      client_id: environment.spotifyClientId,
      redirect_uri: encodeURIComponent(environment.appDomain + 'return/'),
      scope: encodeURIComponent(
        [
          'playlist-read-private',
          'user-read-private',
          'playlist-modify-public',
          'playlist-modify-private'
        ].join(' ')
      ),
      response_type: 'token',
      state: ''
    };

    const paramString = Object.keys(params).map(param => `${param}=${params[param]}`).join('&');

    return (url + '?' + paramString);
  }

  set authorization(authorizationMap: IAuthorizationMap) {
    if (authorizationMap.access_token) {
      this._accessToken = authorizationMap.access_token;
    }
    if (authorizationMap.expires_in) {
      const expires = parseInt(authorizationMap.expires_in, 10) * 1000;

      this._expiration = new Date().getTime() + expires;
    }
    if (authorizationMap.token_type) {
      this._tokenType = authorizationMap.token_type;
    }
    if (authorizationMap.state) {
      this._state = authorizationMap.state;
    }
  }

  ensureAccessToken(): boolean | Error {
    return this._accessToken ? true : new Error('no-access-token');
  }
}
