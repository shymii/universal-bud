import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/o-nas',
    name: 'o-nas',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/uslugi',
    name: 'uslugi',
    component: () => import('../views/UslugiView.vue')
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: () => import('../views/KontaktView.vue')
  },
  {
    path: '/realizacje',
    name: 'realizacje',
    component: () => import('../views/RealizacjeView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
