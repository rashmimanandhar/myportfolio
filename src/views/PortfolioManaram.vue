<template>
  <div class="two main-content">
    <div class="left-content slideUp">
      <router-link to="/portfolio/concordia">
        <img src="../assets/arrow-up.svg" class="arrow arrow-up" alt="" />
      </router-link>
      <h1>Manaram Technology</h1>

      <p class="subtxt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
        purus eget metus tincidunt, nec feugiat lorem cursus.
      </p>
      <p class="subtxt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
        purus eget metus tincidunt, nec feugiat lorem cursus.
      </p>

      <!--      <router-link to="/portfolio/ENT">-->
      <!--        <img src="../assets/arrow-down.svg" class="arrow arrow-down" alt="" />-->
      <!--      </router-link>-->
    </div>
    <div class="right-content img2"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Manaram",
  components: {}
};
</script>

<style scoped lang="scss">
$page_color: #5487a8;

h1 {
  color: $page_color !important;
}

.img2 {
  background: url("../assets/card.jpg");
  background-size: cover;
  background-position: 50%;

  img {
    width: 50%;
  }
}
</style>
