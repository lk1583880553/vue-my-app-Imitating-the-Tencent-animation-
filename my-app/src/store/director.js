import directorAPI from '@/api/director.js'
export default {
	state: {
		directorList: []
	},
	getters: {
		
	},
	actions: {
		getDirectorlist({commit}){
			directorAPI.getDirectorlist((data) => {
				commit('changeDirectorList',data)
			})
		}
	},
	mutations: {
		changeDirectorList(state,data){
			state.directorList = data
		}
	}
}