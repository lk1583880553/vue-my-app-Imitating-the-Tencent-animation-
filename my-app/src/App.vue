<template>
  <div class="container">
      <header-m></header-m>
    <div class="content">
    	<transition name="slide-fade">
          <router-view></router-view>
      </transition>
    </div>
    
    <footer-m></footer-m>
    
  </div>
</template>

<script>
import Head from '@/components/head/index.vue'
import Foot from '@/components/foot/index.vue'
import Home from '@/components/home/index.vue'
export default {
  methods: {},
  components: {
    'header-m': Head,
    'footer-m': Foot,
    'home':Home
  }
}
</script>
