<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>6 YRS DEVELOPMENT</h1>
      <p class="subtxt">
        I have been a web developer for 6 yrs and work as a freelancer
      </p>
      <p class="subtxt">
        I've worked with KUDO, Manaram Technology, ENT(JAPAN) & PROCIT
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
