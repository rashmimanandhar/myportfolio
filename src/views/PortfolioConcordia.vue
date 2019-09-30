<template>
  <div class="one main-content">
    <div class="left-content slideUp">
      <router-link to="/portfolio/kudo">
        <img src="../assets/arrow-up.svg" class="arrow arrow-up" alt="" />
      </router-link>
      <h1>Concordia</h1>
      <p class="subtxt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
        purus eget metus tincidunt, nec feugiat lorem cursus.
      </p>
      <p class="subtxt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
        purus eget metus tincidunt, nec feugiat lorem cursus.
      </p>

      <router-link to="/portfolio/manaram">
        <img src="../assets/arrow-down.svg" class="arrow arrow-down" alt="" />
      </router-link>
    </div>
    <div class="right-content img2">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Concordia",
  components: {}
};
</script>

<style scoped lang="scss">
  $page_color: #48b886;

  h1 {
    color: $page_color !important;
  }

  .img2 {
    background: url("../assets/phone.jpg");
    background-size: cover;
    background-position: 50%;

    img {
      width: 50%;
    }
  }
</style>
