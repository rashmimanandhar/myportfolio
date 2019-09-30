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

<style lang="scss" src="./global.scss"></style>
