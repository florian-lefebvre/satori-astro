# `satori-astro`

This is an [Astro integration](https://docs.astro.build/en/guides/integrations-guide/) and utilities
to help you generate OpenGraph images using [satori](https://github.com/vercel/satori).

## Usage

### Installation

Install the integration **automatically** using the Astro CLI:

```bash
pnpm astro add satori-astro
```

```bash
npm astro add satori-astro
```

```bash
yarn astro add satori-astro
```

Or install it **manually**:

1. Install the required dependencies

```bash
pnpm add satori-astro
```

```bash
npm install satori-astro
```

```bash
yarn add satori-astro
```

2. Add the integration to your astro config

```diff
+import integration from "satori-astro";

export default defineConfig({
  integrations: [
+    integration(),
  ],
});
```

### Configuration

TODO:configuration

## Contributing

This package is structured as a monorepo:

- `playground` contains code for testing the package
- `package` contains the actual package

Install dependencies using pnpm: 

```bash
pnpm i --frozen-lockfile
```

Start the playground:

```bash
pnpm playground:dev
```

You can now edit files in `package`. Please note that making changes to those files may require restarting the playground dev server.

## Licensing

[MIT Licensed](https://github.com/florian-lefebvre/satori-astro/blob/main/LICENSE). Made with ❤️ by [Florian Lefebvre](https://github.com/florian-lefebvre).
