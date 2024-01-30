import type { APIRoute } from "astro";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";

export const GET: APIRoute = async () => {
	const fontFile = await fetch(
		"https://og-playground.vercel.app/inter-latin-ext-700-normal.woff",
	);
	const fontData: ArrayBuffer = await fontFile.arrayBuffer();

		const width = 1920

	const svg = await satoriAstroOG({
		template: html`<div style="display: flex; justify-items: center; align-items: center; background-color: brown; font-family: Inter; height: 100%;">
                            <h1 style="color: orange;">Test toSvg</h1>
                        </div>`,
		width,
		height: 1080,
	}).toSvg({
			fonts: [
				{
					name: "Inter Latin",
					data: fontData,
					style: "normal",
				},
			],
	});

	const image = new Resvg(svg, {
		fitTo: { mode: "width", value: width },
	})
		.render()
		.asPng();

	return new Response(image, {
		headers: {
			"Content-Type": "image/png",
			"Content-Length": image.length.toString(),
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	});
};
