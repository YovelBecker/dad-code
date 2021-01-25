<template>
  <section v-if="joke" class="joke-preview-container">
    <!-- <h1 class="title">You have been given a gift:</h1> -->
    <h5>{{ joke.setup }}</h5>
    <h4>{{ joke.punchline }}</h4>
  </section>
</template>

<script>
export default {
  props: {
    joke: { type: Object, required: true }
  }
}
</script>