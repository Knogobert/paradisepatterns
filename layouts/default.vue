<template>
  <div class="layout">
    <div class="header">
      <n-link class="logo" to="/"><Logo/></n-link>
    </div>
    <nuxt class="content" />
    <div class="footer">
      <p>
        <a target="_blank"
            rel="noopener noreferrer"
            href="https://etsy.com">
          Paradise Patterns on Etsy
        </a>
      </p>
      <p>
        <!-- This is not an n-link because the NetlifyCMS admin page is static.
        If you make it an n-link, you'll get a "Page could not be found" when
        you click it. -->
        <a href="/admin">
          Admin
       </a>
     </p>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  }
}
</script>

<style>
.layout {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  padding: 40px 20px 10px 20px;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.content {
  margin-top: 40px;
  margin-bottom: 40px;
}

.footer {
  background-color: #F3D9E8;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer > * {
  padding: 20px;
}

.logo {
  display: block;
  margin: 0;
  padding: 0;
}
</style>
