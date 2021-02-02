<template>
  <header>
    <h1>Welcome To Daddy</h1>
  </header>
  <div class="btn btn-outline-success sticky-top" @click="installer" :style="{ display: installBtn }">Install</div>
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
  data() {
    return {
      installBtn: 'none',
      installer: undefined
    }
  },
  created() {
    let installPrompt;
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      installPrompt = e;
      this.installBtn = 'block';
    })

    this.installer = () => {
      this.installBtn = 'none';
      installPrompt.prompt();
      installPrompt.userChoice.then(result => {
        if (result.outcome === 'accepted') {
          console.log('user accepted');
        } else {
          console.log('user denied');
        }
        installPrompt = null;
      })
    }
  }
}
</script>