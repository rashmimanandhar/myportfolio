<template>
  <div id="app">
    <div class="container">
      <div class="inner">
        <nav>
          <router-link to="/" id="logo">Rashmi Manandhar </router-link>
          <ul>
            <li>
              <router-link to="/"> Home </router-link>
              <router-link to="/about"> About </router-link>
            </li>
          </ul>
        </nav>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
