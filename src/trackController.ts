import {
  RouterContext,
  Status,
} from 'https://deno.land/x/oak/mod.ts';

import { SpotifyAuth } from './types.ts';
import { searchForTrack } from './spotify-api.ts';

export async function getTrack(
  { request, response }: RouterContext,
  auth: SpotifyAuth
) {
  const searchQuery = request.url.searchParams.get('q');
  if (searchQuery) {
    try {
      const track = await searchForTrack(searchQuery, auth);
      if (!!track) {
        response.body = track;
        response.status = Status.OK;
      } else {
        throw 'error with spotify';
      }
    } catch (err) {
      response.body = {
        message: 'Spotify API failed...',
      };
      response.status = Status.FailedDependency;
    }
  } else {
    response.body = {
      message: 'Please provide a Search Query for property `q`',
    };
    response.status = Status.BadRequest;
  }
}
