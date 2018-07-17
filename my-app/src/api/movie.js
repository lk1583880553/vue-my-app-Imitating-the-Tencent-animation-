import $ from 'jquery'

export default {
	getMovielist(cb){
        $.ajax({
          url: 'http://v.juhe.cn/movie/movies.today?key=0753623a1b4e61417ab10415e81867ad&cityid=3',
          type: 'GET',
          dataType: 'JSONP',
          success: function (data){
						cb(data.result)
					}
        })
	}
}