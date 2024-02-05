import type { APIRoute } from "astro";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";
// import "astro-carton";
// import { AstroCarton } from "astro-carton/runtime";
import OG from "../components/OG.astro";

export const GET: APIRoute = async () => {
	const fontFile = await fetch(
		"https://og-playground.vercel.app/inter-latin-ext-700-normal.woff",
	);
	const fontData: ArrayBuffer = await fontFile.arrayBuffer();

	await import("astro-carton")
	const { AstroCarton } = await import("astro-carton/runtime")

	// return await satoriAstroOG({
	// 	template: html`<div style="display: flex; justify-items: center; align-items: center; background-color: red; font-family: Inter; height: 100%;">
    //                         <h1 style="color: blue;">Test toResponse</h1>
    //                     </div>`,
	// 	width: 1920,
	// 	height: 1080,
	// }).toResponse({
	// 	satori: {
	// 		fonts: [
	// 			{
	// 				name: "Inter Latin",
	// 				data: fontData,
	// 				style: "normal",
	// 			},
	// 		],
	// 	},
	// });
	const carton = new AstroCarton();
	return await satoriAstroOG({
		template: html(await carton.renderToString(OG)),
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
