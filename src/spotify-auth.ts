import * as base64 from 'https://denopkg.com/chiefbiiko/base64/mod.ts';

import environment from './env.ts';
import { SpotifyAuth } from './types.ts';

export default async function (): Promise<SpotifyAuth> {
  const encodedCredentials: string = base64.fromUint8Array(
    new TextEncoder().encode(
      `${environment.clientId}:${environment.clientSecret}`
    )
  );

  const body = new URLSearchParams({
    grant_type: 'client_credentials',
  });

  const response = await fetch(
    'https://accounts.spotify.com/api/token',
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
      },
      body,
    }
  );

  return await response.json();
}
