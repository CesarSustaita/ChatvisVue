import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      
    },
    {
      path: '/registro',
      name: 'registro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegistroView1.vue')
    },
    {
      path: '/registro2',
      name: 'registro2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegistroView2.vue')
    },
    {
      path: '/registro3',
      name: 'registro3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegistroView3.vue')
    },
    {
      path: '/registro4',
      name: 'registro4',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegistroView4.vue')
    },
    {
      path: '/inicio',
      name: 'inicio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InicioSesionView.vue')
    },
    {
      path: '/lector',
      name: 'lector',
      meta: { showNav: false },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Analizador/LectorView.vue')
    },
    {
      path: '/analizador',
      name: 'analizador',
      meta: { showNav: false },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Analizador/AnalizadorView.vue')
    }
  ]
})

export default router
