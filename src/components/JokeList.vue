<template>
  <template v-if="jokes">
    <JokePreview v-for="joke in jokes" :joke="joke" :key="joke.id" />
  </template>
</template>

<script>
import jokeService from '../services/jokeService';
import JokePreview from './JokePreview';

export default {
  data() {
    return {
      jokes: null
    }
  },
  created() {
    this.jokes = jokeService.getJokes();
  },
  components: {
    JokePreview
  }
}
</script>
