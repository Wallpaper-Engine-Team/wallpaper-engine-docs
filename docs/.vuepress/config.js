const en = require('../../app_strings/en.json');

module.exports = {
	title: 'Wallpaper Engine - Designer Documentation',
	locales: {
		'/en/': {
			lang: 'en',
			title: en.title,
			description: en.description,
		},
	},
	themeConfig: {
		logo: '/img/wallpaper_engine_logo_small.png',
		nextLinks: true,
		prevLinks: true,
		locales: {
			'/en/': {
				searchPlaceholder: en.searchPlaceholder,
				selectText: en.language_name,
				label: en.language_name,
				ariaLabel: en.language_name,
				sidebar: {
					'/en/scene/': getSceneSidebar('/en/', en.sidebar_overview, en.sidebar_gettingstarted, en.sidebar_effects, en.sidebar_assets, en.sidebar_properties, en.sidebar_audio, en.sidebar_particles, en.sidebar_animations, en.sidebar_puppetwarp, en.sidebar_parallax, en.sidebar_rgb, en.sidebar_performance, en.sidebar_scenescript, en.sidebar_shaders, en.sidebar_imagepreparation, en.sidebar_lightingandreflections, en.sidebar_models),
					'/en/web/': getWebSidebar('/en/', en.sidebar_web_overview, en.sidebar_web_first, en.sidebar_web_customization, en.sidebar_web_audio, en.sidebar_web_performance, en.sidebar_web_rgb, en.sidebar_web_debug),
					'/': []
				},
				nav: [
					{ text: en.navbar_scene, link: '/scene/overview' },
					{ text: en.navbar_web, link: '/web/overview' }
				]
			},
		}
	},
	plugins: [
		['@vuepress/back-to-top', true],
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

function getSceneSidebar(locale, overviewGroup, gettingStartedGroup, effectsGroup, assetsGroup, propertiesGroup, audioGroup, particlesGroup, animationsGroup, puppetwarpGroup, parallaxGroup, rgbGroup, performanceGroup, scenescriptGroup, shadersGroup, imagePreparationGroup, lightingGroup, modelGroup) {
	return [
		{
			title: overviewGroup,
			collapsable: false,
			children: [
				locale + 'scene/overview',
			]
		},
		{
			title: gettingStartedGroup,
			collapsable: true,
			children: [
				locale + 'scene/first/gettingstarted',
				locale + 'scene/first/effects',
				locale + 'scene/first/assets',
				locale + 'scene/first/properties',
				locale + 'scene/first/publishing',
			]
		},
		{
			title: effectsGroup,
			collapsable: true,
			children: [
				locale + 'scene/effects/introduction',
				locale + 'scene/effects/overview',
				locale + 'scene/effects/bloom'
			]
		},
		{
			title: assetsGroup,
			collapsable: true,
			children: [
				locale + 'scene/assets/overview',
				locale + 'scene/assets/sharing',
			]
		},
		{
			title: propertiesGroup,
			collapsable: true,
			children: [
				locale + 'scene/userproperties/overview',
				locale + 'scene/userproperties/color',
				locale + 'scene/userproperties/slider',
				locale + 'scene/userproperties/checkbox',
				locale + 'scene/userproperties/combo',
				locale + 'scene/userproperties/text',
				locale + 'scene/userproperties/texture',
				locale + 'scene/userproperties/usershortcut',
				locale + 'scene/userproperties/texturevariant',
			]
		},
		{
			title: audioGroup,
			collapsable: true,
			children: [
				locale + 'scene/audiovisualizer/overview',
				locale + 'scene/audiovisualizer/albumcover',
				locale + 'scene/audiovisualizer/mediainformation'
			]
		},
		{
			title: particlesGroup,
			collapsable: true,
			children: [
				locale + 'scene/particles/introduction',
				locale + 'scene/particles/tutorial/getting_started',
				locale + 'scene/particles/component/general',
				locale + 'scene/particles/component/renderer',
				locale + 'scene/particles/component/emitter',
				locale + 'scene/particles/component/initializer',
				locale + 'scene/particles/component/operator',
				locale + 'scene/particles/component/children',
				locale + 'scene/particles/component/control_point',
			]
		},
		{
			title: animationsGroup,
			collapsable: true,
			children: [
				locale + 'scene/timeline/introduction',
				locale + 'scene/timeline/combined',
				locale + 'scene/timeline/modes',
				locale + 'scene/timeline/animationevents'
			]
		},
		{
			title: imagePreparationGroup,
			collapsable: true,
			children: [
				locale + 'scene/image-preparation/external-editor',
				locale + 'scene/image-preparation/foreground-separation',
				locale + 'scene/image-preparation/character-sheet',
			]
		},
		{
			title: puppetwarpGroup,
			collapsable: true,
			children: [
				locale + 'scene/puppet-warp/introduction',
				locale + 'scene/puppet-warp/charactersheet',
				locale + 'scene/puppet-warp/animationmixing',
				locale + 'scene/puppet-warp/perspective',
				locale + 'scene/puppet-warp/boneconstraints',
				locale + 'scene/puppet-warp/blendshapes',
				locale + 'scene/puppet-warp/interactive',
				locale + 'scene/puppet-warp/inversekinematics',
				locale + 'scene/puppet-warp/clippingmasks',
				locale + 'scene/puppet-warp/blendrules',
				locale + 'scene/puppet-warp/texturechannels',
				locale + 'scene/puppet-warp/attachments',
				locale + 'scene/puppet-warp/extending',
			]
		},
		{
			title: lightingGroup,
			collapsable: true,
			children: [
				locale + 'scene/lighting/introduction',
				locale + 'scene/lighting/lights',
			]
		},
		{
			title: parallaxGroup,
			collapsable: true,
			children: [
				locale + 'scene/parallax/introduction',
				locale + 'scene/parallax/oversized',
				locale + 'scene/parallax/depthparallax'
			]
		},
		{
			title: rgbGroup,
			collapsable: true,
			children: [
				locale + 'scene/rgb/introduction'
			]
		},
		{
			title: performanceGroup,
			collapsable: true,
			children: [
				locale + 'scene/performance/resolution',
				locale + 'scene/performance/texture'
			]
		},
		{
			title: scenescriptGroup,
			collapsable: true,
			children: [
				locale + 'scene/scenescript/introduction',
				locale + 'scene/scenescript/tutorials',
				locale + 'scene/scenescript/reference',
			]
		},
		{
			title: modelGroup,
			collapsable: true,
			children: [
				locale + 'scene/models/introduction',
				locale + 'scene/models/animation',
				locale + 'scene/models/camera',
				locale + 'scene/models/fog',
				locale + 'scene/models/lighting',
				locale + 'scene/models/shader',
				locale + 'scene/models/attachment',
				locale + 'scene/models/simulation',
			]
		},
		{
			title: shadersGroup,
			collapsable: true,
			children: [
				locale + 'scene/shader/overview',
				locale + 'scene/shader/syntax',
				locale + 'scene/shader/variables',
				locale + 'scene/shader/headers',
				locale + 'scene/shader/mobile',
				locale + 'scene/shader/tutorials/desaturation'
			]
		}
	]
}

function getWebSidebar(locale, introGroup, gettingStartedGroup, customizationGroup, audioGroup, performanceGroup, rgbGroup, debugGroup) {
	return [
		{
			title: introGroup,
			collapsable: false,
			children: [
				locale + 'web/overview',
			]
		},
		{
			title: gettingStartedGroup,
			collapsable: false,
			children: [
				locale + 'web/first/gettingstarted',
			]
		},
		{
			title: customizationGroup,
			collapsable: false,
			children: [
				locale + 'web/customization/properties',
				locale + 'web/customization/displaycondition',
				locale + 'web/customization/localization'
			]
		},
		{
			title: audioGroup,
			collapsable: false,
			children: [
				locale + 'web/audio/visualizer',
				locale + 'web/audio/media',
			]
		},
		{
			title: performanceGroup,
			collapsable: false,
			children: [
				locale + 'web/performance/fps'
			]
		},
		{
			title: rgbGroup,
			collapsable: false,
			children: [
				locale + 'web/api/rgb'
			]
		},
		{
			title: debugGroup,
			collapsable: false,
			children: [
				locale + 'web/debug/debug'
			]
		}
	]
}
