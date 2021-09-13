import Vue from 'vue'
import VueRouter from 'vue-router'
import Loan from '../views/Loan.vue'
import PageNotFound from '../views/ErrorPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Loan',
    component: Loan,
    meta: {
      headerClass: 'blue'
    }
  },

    {
      path: '/feature',
      name: 'Feature',
      meta: {
        headerClass: 'light'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Feature.vue')
    },  
    {
      path: '/how-it-work',
      name: 'How-It-Work',
      meta: {
        headerClass: 'light'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/HowItWork.vue')
    },
    {
      path: '/pricing',
      name: 'Pricing',
      meta: {
        headerClass: 'light'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Pricing.vue')
    },
    {
      path: '/shop',
      name: 'Shop',
      meta: {
        headerClass: 'light'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
    },
    {
      path: '/product_detail',
      name: 'Product-Detail',
      meta: {
        headerClass: 'light'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetail.vue')
    },
    {
      path: '/order',
      name: 'Order',
      meta: {
        headerClass: 'light'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
    },
    {
      path: '/account',
      name: 'Account',
      meta: {
        headerClass: 'light'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: PageNotFound,
    },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to,from,savedPosition){
    if(to.hash){
      return{
        selector:to.hash,
        behavior:'smooth'
      }
    }
  }
})

export default router
