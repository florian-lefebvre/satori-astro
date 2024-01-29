import type { AstroIntegration } from "astro";

export const integration = (): AstroIntegration => {
	return {
		name: "satori-astro",
		hooks: {},
	};
};
