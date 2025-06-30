// import.meta.env.DEV is the Vite-compatible way to check dev mode in SvelteKit v2+


export const siteConfig = {
	name: "Boileplate",
	url: import.meta.env.DEV ? "dev-url" : "production-url",
	description: "Boilerplate for SvelteKit",
	imageUrl: "",
	keywords: ["boilerplate", "svelte", "sveltekit"],
	author: "SxYxuse",
	themeColor: "#110F15",
};

export type SiteConfig = typeof siteConfig;
