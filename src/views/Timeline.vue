<template>
  <div class="timeline" v-on:scroll="onScroll">
    <TimelineBlockLeft
      :border="false"
      :content="{
        year: '2019',
        title: 'Frontend Developer',
        description:
          '<ul>' +
          '<li> Building, ground up, frontend web app using Angular & React </li>' +
          '<li> Creating a web app for the extension of KUDO to highlight AI capabilities </li>' +
          '<li> Maintaining and refactoring the code-base </li>' +
          '<li> Localizing in multiple languages including RTL and non-Latin </li>' +
          '<li> Making the web app compatible with all the browsers </li>' +
          '<li> Debugging, resolving, and enhancing the code-base </li>' +
          '<li> Work with 3rd party APIs and SDKs </li>' +
          '</ul>'
      }"
      :top="true"
    />

    <TimelineBlockRight
      :border="true"
      :content="{
        year: '2018',
        title: 'Product Manager',
        description:
          '<ul>' +
          '<li> Lead the project and guide team members to achieve high end product.</li>' +
          '<li> Communicate with clients regarding the features</li>' +
          '<li> Assist in the collection and documentation of user\'s requirements, development of user stories,estimates and work plans.</li>' +
          '<li> Creating mock-ups for client & designers</li>' +
          '<li> Creating a documentation for developers and designers regarding the requirements of the features</li>' +
          '<li> Working with QA to create documentation for test cases</li>' +
          '<li> Communicating between developers, designers and clients to make a quality product</li>' +
          '<li> Test the product to solve any issues before delivering it to client</li>' +
          '</ul>'
      }"
    />
    <TimelineBlockLeft
      :border="true"
      :content="{
        year: '2009',
        title: 'Title',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue purus eget metus tincidunt, nec feugiat lorem cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tristique, leo ut ornare efficitur, sapien ipsum consectetur velit, a interdum felis diam vitae ligula. Fusce in rutrum mi. Donec fringilla leo et tellus molestie, ut ultrices libero pharetra. Quisque et risus a lectus laoreet fermentum vitae et nunc. Nulla at odio quis enim viverra pulvinar. Nulla facilisi. Sed sit amet lectus at justo elementum varius eu quis orci. Vivamus lacinia nibh ac hendrerit consequat. Proin imperdiet magna mi, nec tincidunt nulla eleifend non. Ut at pretium elit.'
      }"
    />

    <TimelineBlockRight
      :border="false"
      :bottom="true"
      :content="{
        year: '2009',
        title: 'Title',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue purus eget metus tincidunt, nec feugiat lorem cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tristique, leo ut ornare efficitur, sapien ipsum consectetur velit, a interdum felis diam vitae ligula. Fusce in rutrum mi. Donec fringilla leo et tellus molestie, ut ultrices libero pharetra. Quisque et risus a lectus laoreet fermentum vitae et nunc. Nulla at odio quis enim viverra pulvinar. Nulla facilisi. Sed sit amet lectus at justo elementum varius eu quis orci. Vivamus lacinia nibh ac hendrerit consequat. Proin imperdiet magna mi, nec tincidunt nulla eleifend non. Ut at pretium elit.'
      }"
    />
  </div>
</template>
<script>
import TimelineBlockLeft from '../components/TimelineBlockLeft'
import TimelineBlockRight from '../components/TimelineBlockRight'

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
