import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'
import ReparationInfo from '../views/ReparationInfo.vue'

const routes = [
  { path: '/',
    name: 'Acceuil',
    component: Acceuil },
  { path: '/ReparationInfo',
  name: 'ReparationInfo',
  component: ReparationInfo },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
