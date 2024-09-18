<template>
  <div id="app">
    <Menu />
    <div id="content">
      <router-view />
    </div>
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