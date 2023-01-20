<template>
  <div id="app">
    <HomePage></HomePage>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomePage from './Pages/HomePage.vue';
import InsertPage from './Pages/InsertPage.vue';

@Component({
  components: {
    HomePage,
    InsertPage,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
body {
  margin: 0;
  padding: 0;
  display: block;
}
input:focus-visible {
  outline: none;
}
</style>
