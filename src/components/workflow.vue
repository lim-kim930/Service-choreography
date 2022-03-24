<template>
  <router-view :wh="wh"></router-view>
</template>

<script>
export default {
  props: ["wh"]
};
</script>

<style scoped lang="less">
* {
  padding: 10px;
}
</style>
