export default {
	data(){
		return{
			data: ''
		}
	},
	methods: {
		requireBox(){
			this.$bus.$emit('pox-box','box弟弟，我的电话是110！')
		}
	},
	mounted() {
		this.$bus.$on('box-pox',(val) => {
			this.data = val
		})
	}
}