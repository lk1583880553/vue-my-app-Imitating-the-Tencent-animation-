import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './home.js'
import director from './director.js'
import movie from './movie.js'

export default new Vuex.Store({
	modules: {
		home,
		director,
		movie
	}
})