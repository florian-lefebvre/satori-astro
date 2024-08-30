import { Resvg, initWasm } from "@resvg/resvg-wasm";
import satori from "satori";
import type {
	SatoriAstroOGOptions,
	ToImageOptions,
	ToResponseOptions,
	ToSvgOptions,
} from "./types.js";

export const satoriAstroOG = ({
	width,
	height,
	template,
}: SatoriAstroOGOptions) => {
	return {
		async toSvg(options: ToSvgOptions) {
			return await satori(template, { width, height, ...options });
		},
		async toImage({
			satori: satoriOptions,
			resvg: _resvgOptions,
		}: ToImageOptions) {
			const resvgOptions =
				typeof _resvgOptions === "function"
					? _resvgOptions({ width, height })
					: _resvgOptions;

			await initWasm(undefined as any).catch(() => {});
			return new Resvg(await this.toSvg(satoriOptions), {
				fitTo: { mode: "width", value: width },
				...resvgOptions,
			})
				.render()
				.asPng();
		},
		async toResponse({ response: init, ...rest }: ToResponseOptions) {
			const image = await this.toImage(rest);

			return new Response(image, {
				...init,
				headers: {
					"Content-Type": "image/png",
					"Content-Length": image.length.toString(),
					"Cache-Control": "public, max-age=31536000, immutable",
					...init?.headers,
				},
			});
		},
	};
};
