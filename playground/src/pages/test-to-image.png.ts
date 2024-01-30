import type { APIRoute } from "astro";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";

export const GET: APIRoute = async () => {
	const fontFile = await fetch(
		"https://og-playground.vercel.app/inter-latin-ext-700-normal.woff",
	);
	const fontData: ArrayBuffer = await fontFile.arrayBuffer();

	const image = await satoriAstroOG({
		template: html`<div style="display: flex; justify-items: center; align-items: center; background-color: yellow; font-family: Inter; height: 100%;">
                            <h1 style="color: green;">Test toImage</h1>
                        </div>`,
		width: 1920,
		height: 1080,
	}).toImage({
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

	return new Response(image, {
		headers: {
			"Content-Type": "image/png",
			"Content-Length": image.length.toString(),
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	});
};
