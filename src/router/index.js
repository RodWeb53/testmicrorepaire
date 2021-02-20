import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'
import ReparationInfo from '../views/ReparationInfo.vue'
import Vente from '../views/Vente.vue'
import AideInstal from '../views/AideInstal.vue'
import Contrat from '../views/Contrat.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/',
    name: 'Acceuil',
    component: Acceuil },

  { path: '/ReparationInfo',
  name: 'ReparationInfo',
  component: ReparationInfo },

  { path: '/Vente',
  name: 'Vente',
  component: Vente },
  
  { path: '/AideInstal',
  name: 'AideInstal',
  component: AideInstal },

  { path: '/Contrat',
  name: 'Contrat',
  component: Contrat },

  { path: '/Contact',
  name: 'Contact',
  component: Contact },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
