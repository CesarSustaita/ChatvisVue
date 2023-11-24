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
    
      component: () => import('../views/RegistroView1.vue')
    },
    {
      path: '/registro2',
      name: 'registro2',

      component: () => import('../views/RegistroView2.vue')
    },
    {
      path: '/registro3',
      name: 'registro3',

      component: () => import('../views/RegistroView3.vue')
    },
    {
      path: '/registro4',
      name: 'registro4',

      component: () => import('../views/RegistroView4.vue')
    },
    {
      path: '/inicio',
      name: 'inicio',

      component: () => import('../views/InicioSesionView.vue')
    },
    {
      path: '/lector',
      name: 'lector',
      meta: { showNav: false },

      component: () => import('../views/Analizador/LectorView.vue')
    },
    {
      path: '/analizador',
      name: 'analizador',
      meta: { showNav: false },

      component: () => import('../views/Analizador/AnalizadorView.vue')
    },
    {
      path: '/analizadorAdmin',
      name: 'analizadorA',
      meta: { showNav: false },

      component: () => import('../views/Analizador/AnalizadorAdminView.vue')
    }
  ]
})

export default router
