<template>
  <div class="layout">
    <header class="header">
      <n-link class="logo" to="/"><Logo/></n-link>
    </header>
    <nuxt class="content" />
    <footer class="footer">
      <a href="/admin" target="_blank">Admin</a>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style>
.layout {
  /* max-width: 600px; */
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  padding: 40px 20px 30px 20px;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.logo {
  display: block;
  margin: 0;
  padding: 0;
}

.content {
  margin-top: 40px;
  margin-bottom: 40px;
  flex-grow: 2;
  justify-items: flex-start;
}

.footer {
  text-align: center;
}
.footer a {
  color: var(--primary-color);
  opacity: .25;
}
</style>
