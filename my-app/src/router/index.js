import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import ComicDetail from '@/components/comicDetail/index.vue'
// import Actor from '@/components/actor/index.vue'
// import ActorDetail from '@/components/actor/actorDetail/index.vue'
// import Movie from '@/components/movie/index.vue'
// import Director from '@/components/director/index.vue'
// import User from '@/components/user/index.vue'
// import Loging from '@/components/user/loging/index.vue'
// import Nologin from '@/components/user/nologin/index.vue'
Vue.use(Router)

const routes = [
	{
		path: '/',
		redirect: '/home',
		component: Home
	},
	{
		path: '/home',
    component: Home
	},
	{
		path: '/comicDetail',
		component: ComicDetail
	}
// 	{
// 		path: '/actor',
//     component: Actor,
// 	},
// 	{
// 		path: '/actorDetail',
// 		component: ActorDetail
// 	},
// 	{
// 		path: '/movie',
//     component: Movie
// 	},
// 	{
// 		path: '/director',
//     component: Director
// 	},
// 	{
// 		path: '/user',
//     component: User,
// 		children: [
// 		{
// 			path: '',
// 			redirect: 'nologin'
// 		},
// 		{
// 			path: 'loging',
// 			component: Loging
// 		},
// 		{
// 			path: 'nologin',
// 			component: Nologin
// 		}]
// 	}
]
export default new Router({
  routes
})
