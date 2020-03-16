<template>
  <div class="PPlogo">
    <InlineSvg :src="require('../static/images/uploads/pp-logo.svg')" height="245px" width="245px"/>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
  name: 'Logo',
  components: {
    InlineSvg,
  },
};
</script>

<style lang="css" scoped>
.PPlogo {
  display: inline-block;
  height: 245px;
  width: 245px;
  font-size: 5rem;
  text-align: center;
  line-height: 2;
}
</style>
