// ===== SITE CONSTANTS =====
export const SITE = {
	title: "Anna Grace",
	tagline: "Music Composition",
	description: "Music composition and teaching",
	url: "https://music.annagrace.dev",
	author: "Anna Grace",
	locale: "en",
};

// ===== OWNER INFO =====
export const OWNER = {
	name: SITE.title,
	email: "hello@annagrace.dev",
	logo: "/assets/favicon.svg",
	socials: {
		facebook: "https://www.facebook.com/",
		instagram: "https://www.instagram.com/",
	},
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_US",
	image: "/assets/social.jpg", // Default fallback social image located in public/
};
