
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// intro
import LoginForm from '../intro/LoginForm'

import MyHome from '../components/MainHome'

// 설정
import Settings from '../settings/Settings'

import Terms from '../settings/Terms'
import Privacy from '../settings/Privacy'

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

    { path: local+'/', component: MyHome, beforeEnter: requireAuth },

    // 나의 과목 : mywork
    { path: local+'/blog_nemv/myhome', name:'myhome', component: MyHome, beforeEnter: requireAuth },

    // 설정 : settings
    { path: local+'/blog_nemv/settings', name:'settings', component: Settings, beforeEnter: requireAuth },

    { path: local+'/blog_nemv/logout',
        beforeEnter (to, from, next) {
            // auth.logout()
            next(local+'/')
        }
    },
    { path: local+'/blog_nemv/login', name:'login', component: LoginForm },

    // { path: '/splashscreen', component: splashscreen },

    { path: local+'/blog_nemv/terms', name:'terms', component: Terms },
    { path: local+'/blog_nemv/privacy', name:'privacy', component: Privacy },
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routes,

})

export default router


