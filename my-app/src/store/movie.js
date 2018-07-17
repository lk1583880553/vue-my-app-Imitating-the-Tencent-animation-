import movieAPI from '@/api/movie.js'
export default {
	state: {
		movieList: []
	},
	getters: {
		
	},
	actions: {
		getMovielist({commit}){
			movieAPI.getMovielist((data) => {
				commit('changeMovielist',data)
			})
		}
	},
	mutations: {
		changeMovielist(state,data){
			state.movieList = data
		}
	}
}