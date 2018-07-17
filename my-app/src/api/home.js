// import $ from 'jquery'
import axios from 'axios'

export default {
	getHotMovieList(cb){
//     $.ajax({//http://v.juhe.cn/movie/movies.today?key=0753623a1b4e61417ab10415e81867ad&cityid=80
//       url: '/api/Recommend/get/?num=6&adpos=49985',
//       type: 'GET',
//       dataType: 'JSONP',
//       success: function ({result}){
// 				cb(result)
// 			}
//     })
			axios.get('/api/Recommend/get/?num=6&adpos=49985')
			  .then(({data}) => {
					cb(data.list)
				})
				.catch((err) => {
					console.log(err)
				})
	},
	getHotMovieDetil(cb){
			axios.get('/api/Recommend/get/?num=3&adpos=49985')
				.then(({data}) => {
					cb(data.list)
				})
				.catch((err) => {
					console.log(err)
				})
	}
}