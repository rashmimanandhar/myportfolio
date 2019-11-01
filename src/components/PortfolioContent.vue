<template>
  <div class="home main-content">
    <div class="left-content slideUp">
      <h1 :style="h1StyleObj">{{ content.title }}</h1>
      <p class="subtxt" v-html="content.description"></p>
      <router-link to="/portfolio/concordia">
        <img src="../assets/arrow-down.svg" class="arrow arrow-down" alt="" />
      </router-link>
    </div>
    <div class="right-content" :style="rightContentStyleObj">
<!--      <img :src="require(`../assets/${content.image}`)" :style="imgStyleObj" />-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageColor: {
      type: String,
      required: true
    },
    imageColor:{
      type: String,
      required: true
    },
    content: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      h1StyleObj: {
        color: this.pageColor + '!important'
      },
      rightContentStyleObj: {
        background: this.imageColor,
        backgroundImage: 'url('+require(`../assets/${this.content.image}`)+ ')',
        // 'backgroundImage': require(`../assets/${this.content.image}`),
        'background-size': 'contain',
        'background-position': '50%',
        'background-repeat': 'no-repeat'
      },
      imgStyleObj: {
        width: '95%'
      }
    }
  },
  methods: {}
}
</script>

<style scoped></style>
