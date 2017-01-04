
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// intro
import LoginForm from '../intro/LoginForm'

import MyHome from '../components/MainHome'
import TechBlogs from '../components/TechBlogs';



const local = process.env.local || '';

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

    { path: local+'/', component: MyHome},
    
    { path: local+'/blog_nemv/bloghome', name:'bloghome', component: MyHome},
    { path: local+'/blog_nemv/techs', name:'techs', component: TechBlogs},

]

const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes: routes,

})

export default router


