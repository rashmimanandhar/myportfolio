<template>
  <nav @scroll="functionCalled">
    <router-link to="/" id="logo">Rashmi Manandhar </router-link>
    <ul>
      <li>
        <router-link to="/"> Home </router-link>
        <router-link to="/about"> About </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    functionCalled() {
      console.log('testing scroll')
    }
  }
}
</script>

<style scoped>
.img1 {
  background: url('../assets/home.jpg');
}
</style>
