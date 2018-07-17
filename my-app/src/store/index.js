import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './home.js'
import director from './director.js'
import movie from './movie.js'
// const store = new Vuex.Store({
// 	state: {
// 		directorList: [],
// 		movieList: [],
// 		actorList: []
// 	},
// 	mutations: {
// 		directorShow(state,data){
// 			this.state.directorList = data
// 		},
// 		movieShow(state,data){
// 			this.state.movieList = data
// 		},
// 		actorShow(state,data){
// 			this.state.actorList = data
// 		}
// 	}
// })
export default new Vuex.Store({
	modules: {
		home,
		director,
		movie
	}
})