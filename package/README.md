# `satori-astro`

This is an helper function for [Astro](https://astro.build/en) to help you generate OpenGraph images using [satori](https://github.com/vercel/satori) and [sharp](https://github.com/lovell/sharp).

## Usage

### Installation

Install the package **manually**:

Install the required dependencies

```bash
pnpm add satori-astro sharp
```

```bash
npm install satori-astro sharp
```

```bash
yarn add satori-astro sharp
```

### `satoriAstroOG`

`satoriAstroOG` can be used in 3 ways, depending on the level of abstraction you need. We recommend going with `toResponse` by default. For example

```ts
// src/pages/og.png.ts
import type { APIRoute } from "astro";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";

export const GET: APIRoute = async () => {
	const fontFile = await fetch(
		"https://og-playground.vercel.app/inter-latin-ext-700-normal.woff",
	);
	const fontData: ArrayBuffer = await fontFile.arrayBuffer();

	return await satoriAstroOG({
		template: html`<div style="display: flex; justify-items: center; align-items: center; background-color: red; font-family: Inter; height: 100%;">
                            <h1 style="color: blue;">Test toResponse</h1>
                        </div>`,
		width: 1920,
		height: 1080,
	}).toResponse({
		satori: {
			fonts: [
				{
					name: "Inter Latin",
					data: fontData,
					style: "normal",
				},
			],
		},
	});
};
```

- `toSvg`: returns a svg as `string`. It requires font data to be passed in. Any other satori option is optional
- `toImage`: returns an image as `Buffer`. Built on top of `toSvg`, it requires ìts options as the `satori` property. It also allows passing custom resvg options as the `resvg` property
- `toResponse`: returns a `Response`. Built on top of `toImage`, it accepts the same options as well as `response`, that can be used to aspects of the response (like headers).

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
