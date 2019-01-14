
<template>
  <div id="app1">
 
    <a v-link="'/goods'">商品</a>
    <a v-link="'/login'">商品</a>
  
  
    <!-- <goods></goods> -->
    <router-view>111</router-view>
  </div>
</template>
<script>
// import Goods from './components/Goods'

export default {
  data () {
    return {
      playConfig: {}
    }
  },
  ready () {
  },
  methods: {
  },
  components: {
    // 'goods': Goods
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
