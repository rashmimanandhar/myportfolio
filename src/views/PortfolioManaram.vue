<template>
  <PortfolioContent
      :pageColor="'#5487a8'"
      :imageColor="'#DFDFDF'"
      :content="{
      title: 'Web Developer',
      description:
        '<p>This system allows you to create multilingual conferences. You have the ability to join in the meeting and listen to the meeting in the language you desire. <br> <br>I was in charge of maintaining the system and any issues related to design. </p>',
      image: 'manaram.png'
    }"
      :prevPage="'/portfolio/HDC'"
  />
</template>

<script>
  // @ is an alias to /src

  import PortfolioContent from '../components/PortfolioContent'

  export default {
    name: 'productManager',
    components: {
      PortfolioContent
    }
  }
</script>

<style scoped lang="scss"></style>




