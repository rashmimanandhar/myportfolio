<template>
  <div id="app">
    <div class="container">
      <div class="inner">
        <NavBar :class="{hide: !getStateNavBar}"/>

        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
import {mapGetters} from 'vuex'
export default {
  components: {
    NavBar
  },
  computed:{
    ...mapGetters(['getStateNavBar'])
  }
};
</script>
<style lang="scss" src="./global.scss"></style>
