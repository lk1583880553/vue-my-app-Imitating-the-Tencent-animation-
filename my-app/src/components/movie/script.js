import {store} from '@/store/index.js'
import {mapState} from 'vuex'
import Box from '@/components/movie/box/index.vue'
import Pox from '@/components/movie/pox/index.vue'
export default {
	data(){
		return{
			
		}
	},
	computed:{
		...mapState({//store/movie中定义的初始状态是什么，key值就是什么，中间{}中的store/index.js中的modules中的key值
			movieList: ({movie}) => movie.movieList
		})
	},
	components:{
		'v-box': Box,
		'v-pox': Pox
	},
	mounted(){
		this.$store.dispatch('getMovielist')
	}
}