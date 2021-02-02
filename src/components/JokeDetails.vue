<template>
  <section class="joke-details-container">
    <h1 class="title">You have been given a gift:</h1>
    <template v-if="joke">
      <h5>{{ joke.setup }}</h5>
      <h4>{{ punchline }}</h4>
    </template>
    <Loader v-else />
  </section>
</template>

<script>
import jokeService from '../services/jokeService';
import Loader from './Loader.vue';

export default {
  components: { Loader },
  data() {
    return {
      joke: null,
      punchline: '.',
      dotTime: 1000
    }
  },
  async created() {
    this.joke = await jokeService.getRandomJoke();
    this.holdPunchline();
  },
  methods: {
    holdPunchline() {
      let count = 1;
      const dotInterval = setInterval(() => {
        this.punchline += '.';
        if (count === 3) {
          this.punchline = this.joke.punchline;
          return clearInterval(dotInterval)
        } else {
          count++;
        }
      }, this.dotTime)
    }
  },
  destroyed() {
    this.joke = null;
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 20px;
}
h5,
h4 {
  margin-bottom: 10px;
}
</style>