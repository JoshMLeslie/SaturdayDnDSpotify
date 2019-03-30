import { TestBed, inject } from '@angular/core/testing';

import { SpotifyServiceApi } from './spotify.service.api';

describe('SpotifyServiceApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyServiceApi]
    });
  });

  it('should be created', inject([SpotifyServiceApi], (service: SpotifyServiceApi) => {
    expect(service).toBeTruthy();
  }));
});
