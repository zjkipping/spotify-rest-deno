# Simple Spotify Rest (using Deno)

## Getting Started

### Installing Deno

With Shell:

`curl -fsSL https://deno.land/x/install/install.sh | sh`

With PowerShell:

`iwr https://deno.land/x/install/install.ps1 -useb | iex`

run `deno --version` to check that the install was successfull

### Installing script runner

`deno install --allow-read --allow-env --allow-run -n vr https://deno.land/x/velociraptor/cli.ts`

## Running the REST server

On windows you can run `vr.cmd start` to start the server on port 8000.

For anything but windows you should be able to run `vr` without the `.cmd`.

## Bundling the Server

On windows you can run `vr.cmd bundle` to bundle the server app into a single `index.js` file located in `dist`.

For anything but windows you should be able to run `vr` without the `.cmd`.
