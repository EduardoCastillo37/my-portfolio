<template>
  <navbarVue/>
  <bodyVue/>
  <footerVue/>
</template>

<script>
import navbarVue from './components/navbar.vue';
import footerVue from './components/footer.vue'; 
import bodyVue from './components/body.vue';
  export default {
    components: {
      navbarVue,
      footerVue,
      bodyVue
    }
  }
</script>

<style>#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: justify;
  color: #000000;
}</style>