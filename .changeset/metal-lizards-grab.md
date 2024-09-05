---
"satori-astro": minor
---

Updates how `satori-astro` works under the hood. This is a breaking change

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