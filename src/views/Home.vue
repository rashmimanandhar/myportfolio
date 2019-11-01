<template>
  <div class="home main-content">
    <div class="left-content">
      <h3>6 YRS DEVELOPMENT & PRODUCT MANAGEMENT</h3>
      <p class="subtxt">
        I am curious by nature and try to learn about new technologies and how to effectively use them in my work.
      </p>
      <p class="subtxt">
        I recently completed my Masters in Applied Computer Science from Concordia University, Montreal
      </p>
    </div>
    <div class="right-content img1">
      <button>
        <router-link to="/portfolio/kudo">Browse Work</router-link>
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
.img1 {
  background: url("../assets/home.jpg");
}
</style>
