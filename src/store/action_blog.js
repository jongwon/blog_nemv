

export const blogs_tech = ({commit, state, context}, {success, fail}) => {

	commit('startLoading', {silent:true})
	console.log('request ');

	$.ajax({
		url:state.ctx+'/data/blogs/tech',
		dataType:'json',
		timeout: TIMEOUT
	}).done(function(blogs){
		console.log(blogs);

		if(blogs){
			commit('blogs', blogs);
			success();
		}else{
			console.log('login fail...')
			fail();
		}
		commit('endLoading', {silent:true})
	})
}