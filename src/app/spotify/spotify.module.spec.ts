import { SpotifyModule } from './spotify.module';

describe('SpotifyModule', () => {
  let spotifyModule: SpotifyModule;

  beforeEach(() => {
    spotifyModule = new SpotifyModule();
  });

  it('should create an instance', () => {
    expect(spotifyModule).toBeTruthy();
  });
});
