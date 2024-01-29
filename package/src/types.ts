import type { Resvg } from "@resvg/resvg-js";
import type satori from "satori";

type SatoriParameters = Parameters<typeof satori>;
type SatoriOptions = SatoriParameters[1];
type ResvgOptions = NonNullable<ConstructorParameters<typeof Resvg>[1]>;

export type SatoriAstroOGOptions = {
	template: SatoriParameters[0];
	width: number;
	height: number;
};

export type ToSvgOptions = Omit<SatoriOptions, "width" | "height">;
export type ToImageOptions = {
	satori: ToSvgOptions;
	resvg?:
		| ResvgOptions
		| ((params: { width: number; height: number }) => ResvgOptions);
};
export type ToResponseOptions = ToImageOptions & { response?: ResponseInit };