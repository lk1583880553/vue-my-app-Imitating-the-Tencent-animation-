import hotMovieAPI from '@/api/home.js'
export default {
	state: {
		hotMovieList: [],
		hotMovieDetil: []
	},
	getters: {
		
	},
	actions: {
		getHotMovieList({commit}){
			hotMovieAPI.getHotMovieList((data) => {
				commit('changeHotMovieList',data)
			})
		},
		getHotMovieDetil({commit}){
			hotMovieAPI.getHotMovieDetil((data) => {
				commit('showHotMovieDetil',data)
			})
		}
	},
	mutations: {
		changeHotMovieList(state,data){
			state.hotMovieList = data
		},
		showHotMovieDetil(state,data){
			state.hotMovieDetil = data
			console.log(data)
		}
	}
}