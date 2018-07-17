export default {
	data(){
		return{
			data: ''
		}
	},
	methods: {
		callPox(){
			this.$bus.$emit('box-pox','pox哥哥,你电话多少？')			
		}
	},
	mounted() {
		this.$bus.$on('pox-box',(val) => {
			this.data = val
		})
	}
}