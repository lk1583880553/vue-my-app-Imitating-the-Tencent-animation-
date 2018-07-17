import axios from 'axios'

export default {
	getDirectorlist(cb){
		axios.get('http://localhost:8000/api/dirctors')
		  .then(({data}) => {
			  cb(data)
		  })
		  .catch((err) => {
			  console.log(err)
		  })
	}
}