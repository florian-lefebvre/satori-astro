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
