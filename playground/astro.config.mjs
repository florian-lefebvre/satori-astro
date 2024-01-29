import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import satoriAstro from "satori-astro";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), satoriAstro()],
});
