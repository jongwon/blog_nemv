

export const login = ({commit, state, context}, {email, password, success, fail}) => {
	
	// payload.userId = 'jongwon'
	
	// commit('startLoading', {silent:true});

	// $.ajax({
	// 	url:state.ctx+'/blog_nemvrest/user/login',
	// 	dataType:'json',
	// 	data:{
	// 		email: email,
	// 		password: password
	// 	},
	// 	timeout: TIMEOUT
	// }).done(function(user){
		
	// 	// console.log(user);

	// 	if(user && user.id){
	// 		commit({
	// 			type: 'user', 
	// 			user: user
	// 		})
	// 		commit('endLoading', {silent:true});
	// 		if(localStorage){
	// 			localStorage.setItem('user', JSON.stringify(user));
	// 		}

	// 		success();

	// 	}else{
	// 		console.log('login fail...')
	// 		commit('endLoading', {silent:true})
	// 		fail();
	// 	}
	// })

	commit({
		type: 'user', 
		user: {
			id: 1,
			name:'jongwon',
			email: 'jongwon'
		}
	});
	success();
};

export const reload = ({commit, state}, {user, success, fail}) => {
	// commit('startLoading', {silent:true});
	// $.ajax({
	// 	url:state.ctx+'/blog_nemvrest/user/reload',
	// 	dataType:'json',
	// 	data:{
	// 		email: user.email
	// 	},
	// 	timeout: TIMEOUT
	// }).done(function(user){

	// 	// console.log(JSON.stringify(user));

	// 	if(user){
	// 		commit('user', {user});
	// 		success();
	// 	}else{
	// 		fail();
	// 	}
	// 	commit('endLoading', {silent:true});
	// });
	commit({
		type: 'user', 
		user: {
			id: 1,
			name:'jongwon',
			email: 'jongwon'
		}
	});
	success();
};


export const logout = ({commit}) => {
	commit('logout')
	if(localStorage){
		localStorage.setItem('user', '{}');
	}
};

