import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      authentificated: true
    }
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import(/* webpackChunkName: "catalog" */ '../views/Catalog.vue'),
    meta: {
      authentificated: true
    }
  },
  {
    path: '/catalog/:id',
    name: 'articleDetail',
    component: () => import(/* webpackChunkName: "articleDetail" */ '../views/ArticleDetail.vue'),
    meta: {
      authentificated: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let username = firebase.auth().currentUser;
  let authorization = to.matched.some(record => record.meta.authentificated);
  console.log(username)
  if(authorization && !username){
    next('login');
  }else if (!authorization && username){
    next('home');
  }else{
    next();
  }
})

export default router
