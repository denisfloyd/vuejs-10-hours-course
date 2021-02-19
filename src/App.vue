<template>
  <!-- <h1 v-html="title"></h1>
  <p v-if="isShowing">v-if directive</p>
  <p v-else-if="isShowing === null">v-else-if directive</p>
  <p v-else>v-else directive</p>
  <h2>{{ count }}</h2>
  <h2 v-once>{{ count }}</h2>
  <p v-text="text" />  -->

  <AppHeader @open-login-modal="isLoginOpen = true"/>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
</template>

<script>
import AppHeader from './components/AppHeader';
//import DcHeros from './pages/DcHeros';
// import Calendar from './pages/Calendar';
import LoginModal from './components/LoginModal';

export default {
  data() {
    return {
      isLoginOpen: false,
    }
  },
  components: { AppHeader, LoginModal },
};
</script>

<style></style>