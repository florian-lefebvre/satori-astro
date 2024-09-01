import type satori from "satori";
import type Sharp from "sharp";

type SatoriParameters = Parameters<typeof satori>;
type SatoriOptions = SatoriParameters[1];
type sharpOptions = Parameters<typeof Sharp>;

export type SatoriAstroOGOptions = {
	/**
	 * The element passed to `satori`. If you don't use React, make sure
	 * to have a look at https://github.com/natemoo-re/satori-html.
	 */
	template: SatoriParameters[0];
	/**
	 * The image width
	 */
	width: number;
	/**
	 * The image height
	 */
	height: number;
};

/**
 * Options forwarded to satori, except for `width` and `height` which
 * come from `satoriAstroOG`.
 */
export type ToSvgOptions = Omit<SatoriOptions, "width" | "height">;

/**
 * Options forwarded to satori and sharp.
 */
export type ToImageOptions = {
	/**
	 * Options forwarded to satori, except for `width` and `height` which
	 * come from `satoriAstroOG`.
	 */
	satori: ToSvgOptions;
	/**
	 * Options forwarded to sharp. If you want to set another size than the
	 * one used by satori (which is unlikely), you can pass a function that
	 * accepts width and height as arguments.
	 */
	sharp?:
		| sharpOptions
		| ((params: { width: number; height: number }) => sharpOptions);
};

export type ToResponseOptions = ToImageOptions & {
	/**
	 * You can alter the response returned by the function. Alternatively, get
	 * the response and modify it before returning it from the endpoint.
	 */
	response?: ResponseInit;
};
