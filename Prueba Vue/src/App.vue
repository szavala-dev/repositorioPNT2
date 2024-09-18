<template>
  <div id="app">
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import About from './components/About.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Menu,
    About,
    Footer
  }
};
</script>