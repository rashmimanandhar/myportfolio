<template>
  <div class="four main-content">
    <div class="left-content slideUp">
      <h1>Procit</h1>
      <p class="subtxt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
        purus eget metus tincidunt, nec feugiat lorem cursus.
      </p>
      <p class="subtxt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
        purus eget metus tincidunt, nec feugiat lorem cursus.
      </p>

      <router-link to="/portfolio/concordia">
        <img src="../assets/arrow-down.svg" class="arrow arrow-down" alt="" />
      </router-link>
    </div>
    <div class="right-content img2">
      <img src="../assets/logo.svg" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "KUDO",
  components: {}
};
</script>

<style scoped lang="scss">
$page_color: #625b7e;

h1 {
  color: $page_color !important;
}

.img2 {
  background: $page_color;

  img {
    width: 50%;
  }
}
</style>
