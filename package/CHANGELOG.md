# satori-astro

## 0.3.0

### Minor Changes

- c19b4c7: Adds support for Astro 5 beta

## 0.2.0

### Minor Changes

- 0419935: Updates how `satori-astro` works under the hood. This is a breaking change

  It no longer relies on `resvg` but uses `sharp` instead:

  1. The integration is removed, the `satoriAstroOG` helper can be used alone:

  ```diff
  -import satori from "astro-satori"
  import { defineConfig } from "astro/config"

  export default defineConfig({
      integrations: [
  -        satori()
      ]
  })
  ```

  2. `sharp` is a peer dependency. Add it to your project:

  ```bash
  pnpm add satori-astro sharp
  ```

  ```bash
  npm install satori-astro sharp
  ```

  ```bash
  yarn add satori-astro sharp
  ```

## 0.1.0

### Minor Changes

- 032e628: Updates internals to use `wasm` for Cloudflare compatibility

## 0.0.1

### Patch Changes

- e871a39: Initial release
