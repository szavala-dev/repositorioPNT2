import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue')
  },
  {
    path: '/api',
    name: 'Api',
    component: () => import('../components/Api.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;