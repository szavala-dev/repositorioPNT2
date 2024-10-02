import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import ProductsView from '@/views/ProductsView.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/products', name: 'Products', component: ProductsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;