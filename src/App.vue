<template>
  <header>
    <h1>Welcome To Daddy</h1>
  </header>
  <main>
    <section class="nav-tabs-container">
      <router-link :to="{ name: 'curr-joke' }">Today's Joke</router-link>
      <router-link :to="{ name: 'joke-list' }">My Jokes</router-link>
    </section>
    <router-view></router-view>
  </main>
  <footer>
    <h6>Coffeerights © All Right reserved to DAADDDYYYYYY</h6>
  </footer>
</template>

<script>
export default {
  name: 'App',
}
</script>