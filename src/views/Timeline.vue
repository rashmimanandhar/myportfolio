<template>
  <div class="timeline" v-on:scroll="onScroll">
    <TimelineBlockLeft
        :content="{
        year: '2009',
        title: 'Title',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue purus eget metus tincidunt, nec feugiat lorem cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tristique, leo ut ornare efficitur, sapien ipsum consectetur velit, a interdum felis diam vitae ligula. Fusce in rutrum mi. Donec fringilla leo et tellus molestie, ut ultrices libero pharetra. Quisque et risus a lectus laoreet fermentum vitae et nunc. Nulla at odio quis enim viverra pulvinar. Nulla facilisi. Sed sit amet lectus at justo elementum varius eu quis orci. Vivamus lacinia nibh ac hendrerit consequat. Proin imperdiet magna mi, nec tincidunt nulla eleifend non. Ut at pretium elit.'
      }"
        :border="false"
        :top="true"
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
    <TimelineBlockLeft
        :content="{
        year: '2009',
        title: 'Title',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue purus eget metus tincidunt, nec feugiat lorem cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tristique, leo ut ornare efficitur, sapien ipsum consectetur velit, a interdum felis diam vitae ligula. Fusce in rutrum mi. Donec fringilla leo et tellus molestie, ut ultrices libero pharetra. Quisque et risus a lectus laoreet fermentum vitae et nunc. Nulla at odio quis enim viverra pulvinar. Nulla facilisi. Sed sit amet lectus at justo elementum varius eu quis orci. Vivamus lacinia nibh ac hendrerit consequat. Proin imperdiet magna mi, nec tincidunt nulla eleifend non. Ut at pretium elit.'
      }"
        :border="true"
    />

    <TimelineBlockRight
        :content="{
        year: '2009',
        title: 'Title',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue purus eget metus tincidunt, nec feugiat lorem cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tristique, leo ut ornare efficitur, sapien ipsum consectetur velit, a interdum felis diam vitae ligula. Fusce in rutrum mi. Donec fringilla leo et tellus molestie, ut ultrices libero pharetra. Quisque et risus a lectus laoreet fermentum vitae et nunc. Nulla at odio quis enim viverra pulvinar. Nulla facilisi. Sed sit amet lectus at justo elementum varius eu quis orci. Vivamus lacinia nibh ac hendrerit consequat. Proin imperdiet magna mi, nec tincidunt nulla eleifend non. Ut at pretium elit.'
      }"
        :border="false"
        :bottom="true"
    />


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

