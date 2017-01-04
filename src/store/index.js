
import Vue from 'vue'
import Vuex from 'vuex'
import * as action_user from './action_user'
import mutations from './mutations'


Vue.use(Vuex);

const state = {
	ctx: '',
	imageServerUrl:'',
	loading: false,
	user: null
};

const actions = {
	...action_user
};

const getters = {
	ctx: state => state.ctx,
	imageServerUrl: state => state.imageServerUrl,
	loginState: state => state.user && state.user.userId,
	loading: state => state.loading,
	user: state => state.user,
};

const store = new Vuex.Store({
	state, 
	mutations,
	actions,
	getters,
});

export default store;