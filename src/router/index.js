import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import testPage from '../views/testPage.vue'
import testPageTW from '../views/testPageTW.vue'
import testPageTH from '../views/testPageTH.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/testPage',
    name: 'testPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: testPage
    // beforeEnter: (to, from) => {
    //   const toke = JSON.parse(localStorage.getItem('agentID'))
    //   console.log('agentO', toke)
    //   // reject the navigation
    //   if (toke === 1) {
    //     return true
    //   } else {
    //     console.log('error')
    //     return false
    //   }
    // }
  },
  {
    path: '/testPageTH',
    name: 'testPageTH',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: testPageTH
    // beforeEnter: (to, from) => {
    //   const toke = JSON.parse(localStorage.getItem('agentID'))
    //   console.log('agentO', toke)
    //   // reject the navigation
    //   if (toke === 1) {
    //     return true
    //   } else {
    //     console.log('error')
    //     return false
    //   }
    // }
  },
  {
    path: '/testPageTW',
    name: 'testPageTW',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: testPageTW
    // beforeEnter: (to, from) => {
    //   const toke = JSON.parse(localStorage.getItem('agentID'))
    //   console.log('agentO', toke)
    //   // reject the navigation
    //   if (toke === 1) {
    //     return true
    //   } else {
    //     console.log('error')
    //     return false
    //   }
    // }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
