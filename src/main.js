// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router';
import store from './store';
import {sync} from 'vuex-router-sync';

import App from './App'

sync(store, router);
router.store=store;

new Vue({
	el: '#app',
	router,
    store,
    data:{
        ctx: process.env.ctx,
        bus: new Vue()
    },

    created(){
        this.$store.commit('ctx', this.ctx);
    },

    render: h => h(App)
    
})
