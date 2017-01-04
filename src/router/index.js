
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// intro
import LoginForm from '../intro/LoginForm'

import BlogHome from '../components/BlogHome'
import TechBlogs from '../components/TechBlogs';



function requireAuth (to, from, next) {
    let user = router.store.getters.user;
    console.log(user);

    if(!user || !user.id){
        next({
            path: local+'/blog_nemv/login'
        })
    }else{
        next();
    }
}


const routes = [

    { path: '/', component: BlogHome},
    
    { path: '/bloghome', name:'bloghome', component: BlogHome},
    { path: '/techs', name:'techs', component: TechBlogs},

]

const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes: routes,

})

export default router


