import { TestBed } from '@angular/core/testing';

import { SpotifyServiceFeature } from './spotify.service.feature';

describe('SpotifyServiceFeature', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyServiceFeature = TestBed.get(SpotifyServiceFeature);
    expect(service).toBeTruthy();
  });
});
