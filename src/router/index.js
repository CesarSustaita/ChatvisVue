import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Registro/Registro.vue'),
      children: [
        {
          name: 'registro',
          // /registro
          path: '',
          component: () => import('@/views/Registro/Registro1.vue')
        },
        {
          name: 'registro 1',
          // /registro/1
          path: '1',
          component: () => import('@/views/Registro/Registro1.vue')
        },
        {
          name: 'registro 2',
          path: '2',
          component: () => import('@/views/Registro/Registro2.vue')
        },
        {
          name: 'registro 3',
          path: '3',
          component: () => import('@/views/Registro/Registro3.vue')
        },
        {
          name: 'registro 4',
          path: '4',
          component: () => import('@/views/Registro/Registro4.vue')
        }
      ]
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
    },
    {
      path: '/analizadorAdmin',
      name: 'analizadorA',
      meta: { showNav: false },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Analizador/AnalizadorAdminView.vue')
    }
  ]
})

export default router
