<template>
  <!-- <h1 v-html="title"></h1>
  <p v-if="isShowing">v-if directive</p>
  <p v-else-if="isShowing === null">v-else-if directive</p>
  <p v-else>v-else directive</p>
  <h2>{{ count }}</h2>
  <h2 v-once>{{ count }}</h2>
  <p v-text="text" />  -->
  <h1>Heros</h1>
  <ul>
    <li v-for="(hero, index) in heros" :key="index">{{ hero.name }}</li>
  </ul>
  <!-- <input type="text" v-model="newHero"/> -->
  <!-- <input type="text" v-model.lazy="newHero"/> -->
  <form @submit.prevent="newHero = 'Wonder Woman'">
    <input type="text" v-model.number="newHero"/>
    <!-- <button v-on:click="newHero = 'Worder Woman'">Add Hero</button> -->
    <button type="submit">Add Hero</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      // title: '<h1>Vuejs Title<  /h1>',
      // isShowing: null,
      // count: 0,
      // text: "v-text is the same of interpolation",
      heros: [{
        name: 'Batman',
      }, {
        name: 'Spider-man'
      }, {
        name: 'Worder Woman'
      }],
      newHero: 'Aqua-man'
    }
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }
}
</script>