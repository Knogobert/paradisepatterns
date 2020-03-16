<template lang="html">
  <main class="main">
    <div class="main-header">
      <h1>{{siteInfo.sitename}}</h1>
      <p>{{siteInfo.sitedescription}}</p>
    </div>
    <div class="tabs">
      <a target="_blank"
          rel="noopener noreferrer"
          href="https://etsy.com"
           class="button button--pink">
        Buy print-at-home patterns
      </a>
      <n-link to="/contact" class="button button--pink">
        Hire me
      </n-link>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    siteInfo() {
      return this.$store.state.siteInfo;
    }
  }
}
</script>

<style lang="css" scoped>
.main {
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around; */
}
.main-header {
  text-align: center;
}

.tabs {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  padding: 20px 0;
}
.tabs > * + * {
  margin-left: 20px;
}
</style>
