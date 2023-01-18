import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import Sobre from '../views/Sobre'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home

  },
  {
    path: '/',
    name: 'sobre',
    component: Sobre

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;