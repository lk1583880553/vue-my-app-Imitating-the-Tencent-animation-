import axios from 'axios'
import Vue from 'vue'
import { Loadmore, Toast, Indicator  } from 'mint-ui'
Vue.use(Loadmore)

export default {
	data () {
		return {
			ActorList: [],
			allLoaded: false,
			skipNum: 1
		}
	},
	methods: {
		loadTop(){
			setTimeout(() => {
				axios.get('http://localhost:8000/api/usersPage',{
		            params: {
		            	limitNum: 6,
		            	skipNum: 1
		            }
		        }).then((res) => {
		        	Indicator.close()
		        	this.ActorList = res.data
		        	this.skipNum = 1
		        	this.$refs.loadmore.onTopLoaded()
		        })
		          .catch((err) => {
		          	console.log(err)
		        })
			},1000)
		},
		loadBottom(){
			setTimeout(() => {
				axios.get('http://localhost:8000/api/usersPage',{
		            params: {
		            	limitNum: 6,
		            	skipNum: this.skipNum
		            }
		        }).then((res) => {
		        	Indicator.close()
		        	res.data.length > 0 ? this.allLoaded = false : this.allLoaded = true
		        	this.allLoaded == false ? this.skipNum += 1 : Toast('数据加载完毕')
		        	this.ActorList = [...this.ActorList, ...res.data]//es6的数组合并
		        	this.$refs.loadmore.onBottomLoaded()
		        })
		          .catch((err) => {
		          	console.log(err)
		        })
			},1000)
		}
	},
	mounted () {
		axios.get('http://localhost:8000/api/usersPage?limitNum=6&skipNum=1')
		    .then((res) => {
					Indicator.open({
						text: '加载中...',
						spinnerType: 'fading-circle'
					})
        })
        .catch((err) => {
          console.log(err)
        })
	}
}
