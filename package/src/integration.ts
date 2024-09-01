import { defineIntegration } from "astro-integration-kit";

export const integration = defineIntegration({
	name: "satori-astro",
	setup() {
		return {
			"astro:config:setup": ({ updateConfig }) => {
				updateConfig({
					vite: {
						optimizeDeps: {
							exclude: ["sharp"],
						},
					},
				});
			},
		};
	},
});
