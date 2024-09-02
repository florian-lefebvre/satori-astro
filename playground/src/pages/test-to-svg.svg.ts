import type { APIRoute } from "astro";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";

export const GET: APIRoute = async () => {
	const fontFile = await fetch(
		"https://og-playground.vercel.app/inter-latin-ext-700-normal.woff",
	);
	const fontData: ArrayBuffer = await fontFile.arrayBuffer();

	const svg = await satoriAstroOG({
		template: html`<div
      style="display: flex; justify-content: center; align-items: center; background-color: #FFF3E0; font-family: Inter; height: 100%; width: 100%;"
    >
      <div
        style="display: flex; flex-direction: column; align-items: center; background-color: #FFE0B2; padding: 40px; border-radius: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
      >
        <h1 style="color: #E65100; font-size: 72px; margin: 0;">Test toSvg</h1>
        <p style="color: #BF360C; font-size: 24px; margin-top: 20px;">
          SVG Output Example
        </p>
      </div>
    </div>`,
		width: 1920,
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

	return new Response(svg, {
		headers: {
			"Content-Type": "image/svg+xml",
		},
	});
};
