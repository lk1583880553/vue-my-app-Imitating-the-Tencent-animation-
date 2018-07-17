import {store} from '@/store/index.js'
import Vue from 'vue'
import VideoBg from 'vue-videobg'
import { mapState, mapActions} from 'vuex'

Vue.component('video-bg', VideoBg)
Vue.use(VideoBg)
export default {
  name: 'App',
  data () {
    return {
      list: [],
      currentSlide: 100,
      imgList: ['../static/img/img1.png','../static/img/img3.png','../static/img/img6.png','../static/img/img7.png','../static/img/img8.png','../static/img/img9.png','../static/img/img10.png']
    }
  },
	computed:{
		...mapState({
			hotMovieList: ({home}) => home.hotMovieList,
			hotMovieDetil: ({home}) => home.hotMovieDetil
		})
	},
  mounted () {
		this.$nextTick(function(){
			this.fetchList()
			// this.$store.dispatch('getHotMovieList')
			this.getHotMovieList()
			this.getHotMovieDetil()
		})
  },
  methods: {
    fetchList () {
      this.list = [0,1,2,3,4,5];
    },
    transitionend (current) {
      this.currentSlide = current;
    },
		...mapActions([
			'getHotMovieList',
			'getHotMovieDetil'
		])
  }
}