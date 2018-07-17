import axios from 'axios'

export default {
	data () {
		return {
			name: '',
			imgSrc: '',
			id: ''
		}
	},
	methods: {
		getActorDataSuccess(res){
            const {data} = res
            this.name = data[0].name
            this.imgSrc = data[0].avatars.small
            this.id = data[0].id
		},
		getDataFail(err){
			console.log(err)
		}
	},
	mounted () {
		const {id} = this.$route.query
		axios.get('http://localhost:8000/api/updateUser?id='+ id)
		  .then(this.getActorDataSuccess)
          .catch(this.getDataFail)
	}
}
