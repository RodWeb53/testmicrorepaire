import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'

const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: Acceuil
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
