<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-5"
  >
    <router-link class="md:hidden" to="/">Home</router-link>
    <router-link
      v-for="item in list"
      :key="item.to"
      class="mx-2 hidden md:inline-block"
      :to="item.to"
      >{{ item.title }}</router-link
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "Dc Heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider-carousel" },
        // { title: "Calculator", to: "/calculator" },
        // { title: "Modal", to: "/resuseable-modal" },
        // { title: "Chat", to: "/chat" },
        // { title: "User Crud", to: "/user-crud" },
        // { title: "Tensorflow", to: "/tensorflow" },
      ],
    };
  },
};
</script>

<style></style>
