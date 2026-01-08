# satori-astro

## 0.3.3

### Patch Changes

- [#36](https://github.com/florian-lefebvre/satori-astro/pull/36) [`04650fc`](https://github.com/florian-lefebvre/satori-astro/commit/04650fc25de7fef42e4062a616d8dcd61068801e) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Builds source files instead of shipping them directly

## 0.3.2

### Patch Changes

- [#33](https://github.com/florian-lefebvre/satori-astro/pull/33) [`687bc9d`](https://github.com/florian-lefebvre/satori-astro/commit/687bc9d1b66530db34b20665219d6e438907baad) Thanks [@kylejrp](https://github.com/kylejrp)! - Fixes `sharp` peer dependency version range

## 0.3.1

### Patch Changes

- [#15](https://github.com/florian-lefebvre/satori-astro/pull/15) [`8c98769`](https://github.com/florian-lefebvre/satori-astro/commit/8c98769438df38e8f1a01a53118883d942326def) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Bumps version, no code change

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
