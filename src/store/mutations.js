const mutations = {
	
	ctx: (state, ctx) => {
		state.ctx = ctx
	},

	imageServerUrl: (state, imageServerUrl) => {
		state.imageServerUrl = imageServerUrl
	},
	
	startLoading: (state) => {
		state.loading = true
	},

	endLoading: (state) => {
		state.loading = false
	},

	user: (state, {user}) => {
		state.user = user
	},

	logout: (state) => {
		state.user = null;
		state.categoryList = [];
	}
	
}

export default mutations;