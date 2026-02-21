import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
export default defineConfig({
	site: "https://music.annagrace.dev", // update
	integrations: [
		icon(),
		sitemap({
			changefreq: "weekly",
			priority: 0.7,
		}),
	],
	image: {
		layout: "constrained",
	},
	devToolbar: { enabled: false }
});
