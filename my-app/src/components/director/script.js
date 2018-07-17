import {store} from '@/store/index.js'
import {mapState} from 'vuex'

export default{
	computed:{
		...mapState({
			directorList: ({director}) => director.directorList
		})
	},
	mounted(){
	    this.$store.dispatch('getDirectorlist')
	}
}