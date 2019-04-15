<template>
  <div id="client" v-wechat-title="$route.meta.title">
    <a href="">跳转</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "client",
};
</script>

<style scoped>
</style>