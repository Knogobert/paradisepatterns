<template lang="html">
  <main class="main">
    <div class="main-header">
      <h1>{{siteInfo.sitename}}</h1>
      <p>{{siteInfo.sitedescription}}</p>
    </div>
    <div class="tabs button-row">
      <n-link to="/contact" class="button button--outline">
        Hire me
      </n-link>
      <template v-for="link in links">
        <a
          v-if="link.pos === 'button_row'"
          :key="link.id"
          :target="link.newtab ? '_blank' : ''"
          :rel="link.newtab ? 'noopener noreferrer nofollow' : ''"
          :href="link.target"
          class="button button--outline"
        >
          {{ link.name }}
        </a>
      </template>
    </div>
    <div class="tabs socialmedia-row">
      <template v-for="link in links">
        <a
          v-if="link.pos === 'socialmedia_row'"
          :key="link.id"
          :target="link.newtab ? '_blank' : ''"
          :rel="link.newtab ? 'noopener noreferrer nofollow' : ''"
          :href="link.target"
          class="button"
        >
          <inline-svg v-if="link.icon" class="button-icon" :src="link.icon" />
          <!-- <span v-if="link.icon" class="button-icon">
            {{ link.icon }}
          </span> -->
          <span>{{ link.name }}</span>
        </a>
      </template>
    </div>
  </main>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
  components: {
    InlineSvg,
  },
  computed: {
    siteInfo() {
      return this.$store.state.siteInfo;
    },
    links() {
      return this.$store.state.links;
    }
  },
}
</script>

<style lang="css" scoped>

</style>
