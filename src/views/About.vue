<template>
  <div class="about main-content">
    <div class="left-content">
      <h1>About me</h1>
      <p class="subtxt">I design, code and learn</p>

      <button>
        <router-link to="/portfolio/kudo">Look at my work</router-link>
      </button>
    </div>
    <div class="right-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda atque cumque enim esse excepturi fugiat ipsam laborum neque
        ratione, sit sunt voluptatibus. Earum eos nulla perferendis quos sint,
        voluptatibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        itaque necessitatibus quos sunt. Adipisci aspernatur assumenda atque,
        consectetur consequatur eos ipsa itaque iure laborum nihil nisi tempore
        veniam voluptates. Est.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.left-content {
  background-color: #ffe476;
}

.right-content {
  background: #fff;
  padding: 50px;
  margin-top: 80px;
  display: block;
}

button {
  font-size: 1.5em;
  margin-top: 100px;
}

.subtxt {
  font-size: 1.5em;
  margin-top: 30px;
}
</style>
