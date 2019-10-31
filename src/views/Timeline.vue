<template>
  <div class="" v-on:scroll="onScroll">
    <TimelineBlockLeft
        :content="{
        year: '2009',
        title: 'Title',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue purus eget metus tincidunt, nec feugiat lorem cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tristique, leo ut ornare efficitur, sapien ipsum consectetur velit, a interdum felis diam vitae ligula. Fusce in rutrum mi. Donec fringilla leo et tellus molestie, ut ultrices libero pharetra. Quisque et risus a lectus laoreet fermentum vitae et nunc. Nulla at odio quis enim viverra pulvinar. Nulla facilisi. Sed sit amet lectus at justo elementum varius eu quis orci. Vivamus lacinia nibh ac hendrerit consequat. Proin imperdiet magna mi, nec tincidunt nulla eleifend non. Ut at pretium elit.'
      }"
        :border="false"
    />

    <TimelineBlockRight
        :content="{
        year: '2009',
        title: 'Title',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue purus eget metus tincidunt, nec feugiat lorem cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tristique, leo ut ornare efficitur, sapien ipsum consectetur velit, a interdum felis diam vitae ligula. Fusce in rutrum mi. Donec fringilla leo et tellus molestie, ut ultrices libero pharetra. Quisque et risus a lectus laoreet fermentum vitae et nunc. Nulla at odio quis enim viverra pulvinar. Nulla facilisi. Sed sit amet lectus at justo elementum varius eu quis orci. Vivamus lacinia nibh ac hendrerit consequat. Proin imperdiet magna mi, nec tincidunt nulla eleifend non. Ut at pretium elit.'
      }"
        :border="true"
    />

    <!--    <div class="circle-container">-->
    <!--      <section class="tl"></section>-->
    <!--      <section class="tr"></section>-->
    <!--      <div class="flex">-->
    <!--        <span class="circle">2019</span>-->
    <!--      </div>-->
    <!--      <section class="bl"></section>-->
    <!--      <section class="br"></section>-->
    <!--    </div>-->
    <!--    <section class="info">-->
    <!--      <h2>Title</h2>-->
    <!--      <span-->
    <!--        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ea-->
    <!--        deserunt delectus ab nam? Exercitationem aspernatur, alias sed vero esse-->
    <!--        officiis ipsum dicta aliquam, nemo quae odio velit facere-->
    <!--        pariatur.</span-->
    <!--      >-->
    <!--    </section>-->
    <!--    <section></section>-->

    <!--    <section></section>-->
    <!--    <section class="info">-->
    <!--      <h2>Title</h2>-->
    <!--      <span-->
    <!--        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ea-->
    <!--        deserunt delectus ab nam? Exercitationem aspernatur, alias sed vero esse-->
    <!--        officiis ipsum dicta aliquam, nemo quae odio velit facere-->
    <!--        pariatur.</span-->
    <!--      >-->
    <!--    </section>-->
    <!--    <div class="circle-container">-->
    <!--      <section class="tl"></section>-->
    <!--      <section class="tr"></section>-->
    <!--      <div class="flex">-->
    <!--        <span class="circle">2018</span>-->
    <!--      </div>-->
    <!--      <section class="bl"></section>-->
    <!--      <section class="br"></section>-->
    <!--    </div>-->

    <!--    <div class="circle-container">-->
    <!--      <section class="tl"></section>-->
    <!--      <section class="tr"></section>-->
    <!--      <div class="flex">-->
    <!--        <span class="circle">2019</span>-->
    <!--      </div>-->
    <!--      <section class="bl"></section>-->
    <!--      <section class="br"></section>-->
    <!--    </div>-->
    <!--    <section class="info">-->
    <!--      <h2>Title</h2>-->
    <!--      <span-->
    <!--        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ea-->
    <!--        deserunt delectus ab nam? Exercitationem aspernatur, alias sed vero esse-->
    <!--        officiis ipsum dicta aliquam, nemo quae odio velit facere-->
    <!--        pariatur.</span-->
    <!--      >-->
    <!--    </section>-->
    <!--    <section></section>-->

    <!--    <section></section>-->
    <!--    <section class="info">-->
    <!--      <h2>Title</h2>-->
    <!--      <span-->
    <!--        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ea-->
    <!--        deserunt delectus ab nam? Exercitationem aspernatur, alias sed vero esse-->
    <!--        officiis ipsum dicta aliquam, nemo quae odio velit facere-->
    <!--        pariatur.</span-->
    <!--      >-->
    <!--    </section>-->
    <!--    <div class="circle-container">-->
    <!--      <section class="tl"></section>-->
    <!--      <section class="tr"></section>-->
    <!--      <div class="flex">-->
    <!--        <span class="circle">2018</span>-->
    <!--      </div>-->
    <!--      <section class="bl"></section>-->
    <!--      <section class="br"></section>-->
    <!--    </div>-->

    <!--    <div class="circle-container">-->
    <!--      <section class="tl"></section>-->
    <!--      <section class="tr"></section>-->
    <!--      <div class="flex">-->
    <!--        <span class="circle">2017</span>-->
    <!--      </div>-->
    <!--      <section class="bl"></section>-->
    <!--      <section class="br"></section>-->
    <!--    </div>-->
    <!--    <section class="info">-->
    <!--      <h2>Title</h2>-->
    <!--      <span-->
    <!--        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ea-->
    <!--        deserunt delectus ab nam? Exercitationem aspernatur, alias sed vero esse-->
    <!--        officiis ipsum dicta aliquam, nemo quae odio velit facere-->
    <!--        pariatur.</span-->
    <!--      >-->
    <!--    </section>-->
    <!--    <section></section>-->

    <!--    <section></section>-->
    <!--    <section class="info">-->
    <!--      <h2>Title</h2>-->
    <!--      <span-->
    <!--        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ea-->
    <!--        deserunt delectus ab nam? Exercitationem aspernatur, alias sed vero esse-->
    <!--        officiis ipsum dicta aliquam, nemo quae odio velit facere-->
    <!--        pariatur.</span-->
    <!--      >-->
    <!--    </section>-->
    <!--    <div class="circle-container">-->
    <!--      <section class="tl"></section>-->
    <!--      <section class="tr"></section>-->
    <!--      <div class="flex">-->
    <!--        <span class="circle">2016</span>-->
    <!--      </div>-->
    <!--      <section class="bl no-border"></section>-->
    <!--      <section class="br no-border"></section>-->
    <!--    </div>-->
  </div>
</template>
<script>

  import TimelineBlockLeft from "../components/TimelineBlockLeft";
  import TimelineBlockRight from "../components/TimelineBlockRight";

  export default {
    components: {
      TimelineBlockLeft,
      TimelineBlockRight
    },
    methods: {
      onScroll: function(event) {
        let post = event.target
        console.log(post.scrollTop)
        this.$store.dispatch('showNavBar', post.scrollTop < 20)
      }
    },
    destroyed() {
      this.$store.dispatch('showNavBar', true)
    }
  }
</script>
<style lang="scss" scoped>
  $circle-color: #848b91;
  $line-color: #b5bec6;
  $bg: #eff1f5;
  $title: #364652;
  $desc: #071108;

  .timeline {
    background: $bg;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    padding: 100px 50px 15px 50px;
    height: 87%;
    overflow-y: scroll;

    section {
      min-height: 50px;
    }

    .info {
      background-clip: padding-box;
      border-top: 2px solid $line-color;

      h2 {
        color: $title;
        font-size: 1.5rem;
        margin-bottom: 1px;
        opacity: 0.7;
      }

      span {
        color: $desc;
      }
    }

    .info:nth-of-type(2n) {
      padding-right: 2em;
      text-align: right;

      span {
        max-width: 50%;
        display: inline-block;
        animation: slideInRight 1.5s forwards 0s ease-in-out;
      }
    }

    .info:nth-of-type(2n + 1) {
      padding-left: 2em;
      text-align: left;

      span {
        max-width: 50%;
        display: inline-block;
        animation: slideInLeft 1.5s forwards 0s ease-in-out;
      }
    }

    .circle-container:nth-child(2n) {
      .tl {
        grid-area: tl;
        border-top: 2px solid $line-color;
        border-right: 2px solid $line-color;
        border-top-right-radius: 20px;
        margin-bottom: -2px;
      }

      .bl {
        grid-area: bl;
        border-bottom: 2px solid $line-color;
        border-right: 2px solid $line-color;
        border-bottom-right-radius: 20px;
        margin-bottom: -2px;
      }
    }

    .circle-container:nth-child(2n + 1) {
      .tr {
        grid-area: tr;
        border-top: 2px solid $line-color;
        border-left: 2px solid $line-color;
        border-top-left-radius: 20px;
        margin-bottom: -2px;
      }

      .br {
        grid-area: br;
        border-bottom: 2px solid $line-color;
        border-left: 2px solid $line-color;
        border-bottom-left-radius: 20px;
        margin-bottom: -2px;
      }
    }
  }

  .circle-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto 2.5em 2.5em auto;
    grid-template-areas: 'tl tl tr tr' 'cr cr cr cr' 'cr cr cr cr' 'bl bl br br';

    div {
      grid-area: cr;
    }

    // section {
    //   grid-area: tl;
    //   border-top: 2px solid red;
    //   border-right: 2px solid red;
    // }
  }

  .circle {
    width: 5em;
    height: 5em;
    background: $circle-color;
    border-radius: 50%;
    margin-left: 1em;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -1em;
  }

  .no-border {
    border-top: 0px !important;
    border-left: 0px !important;
    border-bottom: 0px !important;
    border-right: 0px !important;
  }

  @keyframes slideInRight {
    0% {
      transform: translateX(-50%);
      opacity: 0.1;
    }
    100% {
      transform: rotate(xx) translateX(0%);
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    0% {
      transform: translateX(50%);
      opacity: 0.1;
    }
    100% {
      transform: rotate(xx) translateX(0%);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    .info span {
      padding-bottom: 1em;
    }
  }
</style>
