<template>
    <web-view :src='site'></web-view>
</template>
<script>
export default {
  data() {
    return {
      site:''
    };
  },
  onLoad(options) {
    this.site = options.site;
  }
};
</script>
<style scoped lang='scss'>
</style>
