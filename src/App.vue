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
  <teleport to="body">
    <LoginModal />
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from "./utilities/firebase";
export default {
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setLoginModal", false);
        this.$store.commit("setAuthUser", user); 
      } else {
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setAuthUser", {});
      }
    });
  },
  components: { AppHeader, LoginModal },
};
</script>

<style></style>