<template lang="html">
  <main class="main">
    <div class="main-header">
      <h1>Contact</h1>
      <p v-if="siteInfo.siteemail">
        Email: <a :href="`mailto:${siteInfo.siteemail}`">{{siteInfo.siteemail}}</a>
      </p>
      <p v-if="siteInfo.sitephone">
        Phone: <a :href="`tel:${siteInfo.sitephone}`">{{siteInfo.sitephone}}</a>
      </p>
    </div>
    <div class="tabs">
      <n-link to="/" class="button button--pink">
        Back
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
