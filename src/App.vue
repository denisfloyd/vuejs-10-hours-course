<template>
  <!-- <h1 v-html="title"></h1>
  <p v-if="isShowing">v-if directive</p>
  <p v-else-if="isShowing === null">v-else-if directive</p>
  <p v-else>v-else directive</p>
  <h2>{{ count }}</h2>
  <h2 v-once>{{ count }}</h2>
  <p v-text="text" />  -->

  <AppHeader />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
//import DcHeros from './pages/DcHeros';
// import Calendar from './pages/Calendar';

export default {
  components: { AppHeader },
};
</script>

<style></style>