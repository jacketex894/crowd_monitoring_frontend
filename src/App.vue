<template>
  <div class="background">
    <MainPage />
  </div>
</template>

<script>
import MainPage from './components/MainPage/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
.background{
  background: linear-gradient(to bottom, #000000, #271b36);
  min-height: 100vh;
}

</style>
