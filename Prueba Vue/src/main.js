import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS
import 'bootstrap'; // Importa Bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/global.css';


const app = createApp(App);
app.use(router);
app.mount('#app');
