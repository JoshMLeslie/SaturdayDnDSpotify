import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {EMPTY, Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {Location} from '@angular/common';
import {IPlaylistTrack, ISimplifiedPlaylist} from '../model/IPlaylistHeader';
import {IPaging} from '../model/Paged';
import {catchError, expand, filter, map, reduce} from 'rxjs/operators';
import {IUser} from '../model/User';
import {SpotifyServiceFeature} from './spotify.service.feature';

export interface IAuthorizationMap {
  access_token?: string;
  expires_in?: string; // number string
  state?: string;
  token_type?: 'Bearer';
}

@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceApi {
  public static apiBase = environment.spotifyDomain;

  constructor(
    private router: Router,
    private http: HttpClient,
    private location: Location,
    private featureService: SpotifyServiceFeature
  ) {}

  get user(): Observable<IUser> {
    const req = new HttpRequest('GET'
      , SpotifyServiceApi.apiBase + '/me'
      , {
        headers: this.featureService.headers
      }
    );

    return this.http.request<IUser>(req).pipe(
      filter(response => response instanceof HttpResponse)
      , catchError(e => {
        console.warn(e);
        return of(e);
      })
    );
  }

  getUserPlaylists(limit = 50, offset = 0): Observable<IPaging<ISimplifiedPlaylist>> {
    const req = new HttpRequest('GET'
      , SpotifyServiceApi.apiBase + '/me/playlists'
      , {
        headers: this.featureService.headers,
        params: {
          limit: limit.toString(),
          offset: offset.toString()
        }
      }
    );

    return this.http.request<IPaging<ISimplifiedPlaylist>>(req).pipe(
      filter(response => response instanceof HttpResponse)
      , catchError(e => {
        console.warn(e);
        return of(e);
      })
    );
  }

  getPlaylist( playlistId: string, limit: number = 50, offset: number = 0): Observable<ISimplifiedPlaylist> {
    const req = new HttpRequest('GET'
      , SpotifyServiceApi.apiBase + '/playlists/' + playlistId
      , {
        headers: this.featureService.headers,
        params: {
          limit: limit.toString(),
          offset: offset.toString()
        }
      }
    );

    return this.http.request<ISimplifiedPlaylist>(req).pipe(
      filter(response => response instanceof HttpResponse)
      , catchError(e => {
        console.warn(e);
        return of(e);
      })
    );
  }

  getPlaylistTracks( playlist_id: string, limit: number = 50, offset: number = 0): Observable<IPaging<IPlaylistTrack>> {
    const req = new HttpRequest('GET'
      , SpotifyServiceApi.apiBase + '/playlists/' + playlist_id + '/tracks'
      , {
        headers: this.featureService.headers,
        params: {
          limit: limit.toString(),
          offset: offset.toString()
        }
      }
    );

    return this.http.request<IPaging<IPlaylistTrack>>(req).pipe(
      filter(response => response instanceof HttpResponse)
      , catchError(e => {
        console.warn(e);
        return of(e);
      })
    );
  }

  getAllUserPlaylists(): Observable<ISimplifiedPlaylist[]> {
    const playlistsPerPage = 50;

    return this.getUserPlaylists(playlistsPerPage, 0).pipe(
      expand((page, i) =>
        page.next ?
          this.getUserPlaylists(
            playlistsPerPage,
            (i + 1) * playlistsPerPage
          )
          : EMPTY
      ),
      map(res => res.items),
      reduce((acc, curr) => [...acc, ...curr], [])
    );
  }

  getAllPlaylistTracks(playlist_id): Observable<IPlaylistTrack[]> {
    const playlistsPerPage = 100;

    return this.getPlaylistTracks(playlist_id, playlistsPerPage, 0).pipe(
      expand((page, idx) =>
        page.next
          ? this.getPlaylistTracks(
          playlist_id,
          playlistsPerPage,
          (idx + 1) * playlistsPerPage
          )
          : EMPTY
      ),
      map(page => page.items),
      reduce((acc, curr) => [...acc, ...curr], [])
    );
  }

}
