import satori from "satori";
import sharp from "sharp";
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
			sharp: _sharpOptions,
		}: ToImageOptions) {
			const sharpOptions =
				typeof _sharpOptions === "function"
					? _sharpOptions({ width, height })
					: _sharpOptions;

			const svgString = await this.toSvg(satoriOptions);

			const pngBuffer = await sharp(Buffer.from(svgString), sharpOptions)
				.resize(width, height)
				.png()
				.toBuffer();

			return pngBuffer;
		},
		async toResponse({ response: init, ...rest }: ToResponseOptions) {
			const image = await this.toImage(rest);

			return new Response(Uint8Array.from(image), {
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
