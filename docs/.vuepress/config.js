const en = require('../../app_strings/en.json');

module.exports = {
	title: 'Wallpaper Engine - Troubleshooting & FAQ',
	locales: {
		'/en/': {
			lang: 'en',
			title: en.title,
			description: en.description,
		},
	},
	themeConfig: {
		logo: '/img/wallpaperenginelogo.png',
		nextLinks: false,
		prevLinks: false,
		locales: {
			'/en/': {
				searchPlaceholder: en.searchPlaceholder,
				selectText: en.language_name,
				label: en.language_name,
				ariaLabel: en.language_name,
				sidebar: {
					'/en/scene/': getSceneSidebar('/en/', en.sidebar_intro),
					'/en/web/': getWebSidebar('/en/', en.sidebar_intro),
					'/': []
				},
				nav: [
					{ text: en.navbar_scene, link: '/scene/' },
					{ text: en.navbar_web, link: '/web/' }
				]
			},
		}
	},
	plugins: [
		['@vuepress/back-to-top', true],
		['@vuepress/google-analytics', { ga: 'UA-145121163-4' }],
		['vuepress-plugin-redirect', { locales: true } ],
		['vuepress-plugin-smooth-scroll'],
		['sitemap', { hostname: 'https://docs.wallpaperengine.io' } ],
		['robots', {
				host: "https://docs.wallpaperengine.io",
				allowAll: true,      
				sitemap: "/sitemap.xml",
				policies: [
					{
						userAgent: '*',
					}
				]
			},
		],
	]
};

function getSceneSidebar(locale, introGroup) {
	return [
		{
			title: introGroup,
			collapsable: false,
			children: [
				locale + 'scene/intro/introduction',
			]
		}
	]
}

function getWebSidebar(locale, introGroup) {
	return [
		{
			title: introGroup,
			collapsable: false,
			children: [
				locale + 'web/intro/introduction',
			]
		}
	]
}
