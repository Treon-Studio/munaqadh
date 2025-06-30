// import.meta.env.DEV is the Vite-compatible way to check dev mode in SvelteKit v2+


export const siteConfig = {
	name: "Munaqadh",
	url: import.meta.env.DEV ? "dev-url" : "production-url",
	description: "Munaqadh",
	imageUrl: "",
	keywords: ["munaqadh", "svelte", "sveltekit"],
	author: "Ridho",
	themeColor: "#110F15",
};

export type SiteConfig = typeof siteConfig;
