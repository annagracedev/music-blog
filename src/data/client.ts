// ===== SITE CONSTANTS =====
export const SITE = {
	title: "Anna Grace",
	tagline: "Composition",
	description: "Music composition",
	url: "https://www.yourwebsite.com",
	author: "Anna Grace",
	locale: "en",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: SITE.title,
	email: "hello@annagrace.dev",
	logo: "/assets/favicons/favicon.svg",
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
