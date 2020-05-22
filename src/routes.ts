import { Router } from 'https://deno.land/x/oak/mod.ts';

import { getTrack } from './trackController.ts';
import getSpotifyAuth from './spotify-auth.ts';

let auth = await getSpotifyAuth();

const router = new Router();
router.get('/track', async context => await getTrack(context, auth));

const milliseconds = 55 * 60 * 1000;

setInterval(async () => {
  auth = await getSpotifyAuth();
}, milliseconds);

export default router;
