import type { APIRoute } from "astro";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";

export const GET: APIRoute = async () => {
	const fontFile = await fetch(
		"https://og-playground.vercel.app/inter-latin-ext-700-normal.woff",
	);
	const fontData: ArrayBuffer = await fontFile.arrayBuffer();

	const image = await satoriAstroOG({
		template: html`<div
      style="display: flex; justify-content: center; align-items: center; background-color: #E0F7FA; font-family: Inter; height: 100%; width: 100%;"
    >
      <div
        style="display: flex; flex-direction: column; align-items: center; background-color: #B2EBF2; padding: 40px; border-radius: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
      >
        <h1 style="color: #00838F; font-size: 72px; margin: 0;">
          Test toImage
        </h1>
        <p style="color: #006064; font-size: 24px; margin-top: 20px;">
          PNG Output Example
        </p>
      </div>
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
		},
	});
};
