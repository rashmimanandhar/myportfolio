<template>
  <div class="home main-content">
    <div class="left-content slideUp">
      <router-link :to="prevPage" v-if="prevPage">
        <img src="../assets/arrow-up.svg" class="arrow arrow-up" alt="" />
      </router-link>
      <h1 :style="h1StyleObj">{{ content.title }}</h1>
      <p class="subtxt" v-html="content.description"></p>
      <router-link :to="nextPage">
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
    },
    nextPage: {
      type: String,
      required: true,
      default: '/portfolio/kudo'
    },
    prevPage: {
      type: String,
      required: false,
    }
  },
  data() {
    console.log(this.pageColor);
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
