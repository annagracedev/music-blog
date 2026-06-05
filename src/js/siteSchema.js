import { SITE, OWNER } from "@data/client";

export function getSiteSchema(origin) {
	const sameAs = [];
	if (OWNER.socials?.facebook) sameAs.push(OWNER.socials.facebook);
	if (OWNER.socials?.instagram) sameAs.push(OWNER.socials.instagram);

	return {
		"@context": "https://schema.org",
		"@type": ["LocalBusiness", "WebSite"],
		"name": OWNER.name,
		"url": SITE.url,
		"logo": origin + OWNER.logo,
		"image": origin + OWNER.logo,
		"email": OWNER.email,
		"sameAs": sameAs,
		"inLanguage": SITE.locale,
	};
}
