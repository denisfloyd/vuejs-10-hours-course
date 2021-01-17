<template>
  <h1 v-html="title"></h1>
  <p v-if="isShowing">v-if directive</p>
  <p v-else-if="isShowing === null">v-else-if directive</p>
  <p v-else>v-else directive</p>
  <h2>{{ count }}</h2>
  <h2 v-once>{{ count }}</h2>
  <p v-text="text" /> 
</template>

<script>
export default {
  data() {
    return {
      title: '<h1>Vuejs Title</h1>',
      isShowing: null,
      count: 0,
      text: "v-text is the same of interpolation"
    }
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }
}
</script>