export default ({ router }) => {
	router.addRoutes([
	  { path: '/scene', redirect: '/scene/intro/introduction' },
	  { path: '/web', redirect: '/web/intro/introduction' },
	])
}