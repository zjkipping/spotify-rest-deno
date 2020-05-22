import { SpotifyAuth, Track, TracksSearchResponse } from './types.ts';

export async function searchForTrack(
  q: string,
  auth: SpotifyAuth
): Promise<Track | null> {
  const response = await await fetch(
    `https://api.spotify.com/v1/search?q=${q}&type=track`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${auth.token_type} ${auth.access_token}`,
      },
    }
  );

  if (!response.ok) {
    return null;
  }

  const payload: TracksSearchResponse = await response.json();

  const items = payload.tracks.items;

  if (items.length > 0) {
    const trackItem = items[0];
    return {
      song: trackItem.name,
      artist: trackItem.artists.map(artist => artist.name).join(', '),
      album: trackItem.album.name,
      albumArtUrl: trackItem.album.images.reduce((prev, curr) =>
        prev.width > curr.width ? prev : curr
      ).url,
    };
  } else {
    return null;
  }
}
