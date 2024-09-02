import type { APIRoute } from "astro";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";

export const GET: APIRoute = async () => {
	const fontFile = await fetch(
		"https://og-playground.vercel.app/inter-latin-ext-700-normal.woff",
	);
	const fontData: ArrayBuffer = await fontFile.arrayBuffer();

	return await satoriAstroOG({
		template: html`<div
      style="display: flex; justify-content: center; align-items: center; background-color: #E8F5E9; font-family: Inter; height: 100%; width: 100%;"
    >
      <div
        style="display: flex; flex-direction: column; align-items: center; background-color: #C8E6C9; padding: 40px; border-radius: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
      >
        <h1 style="color: #2E7D32; font-size: 72px; margin: 0;">
          Test toResponse
        </h1>
        <p style="color: #1B5E20; font-size: 24px; margin-top: 20px;">
          Response Example
        </p>
      </div>
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
