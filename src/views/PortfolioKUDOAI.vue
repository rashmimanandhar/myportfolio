<template>
  <PortfolioContent
    :pageColor="'#ac892a'"
    :imageColor="'#44ACA1'"
    :content="{
      title: 'LEAD FRONTEND DEVELOPER',
      description:
        '<p>This system allows you to create multilingual conferences. You have the ability to join in the meeting and listen to the meeting in the language you desire. <br> <br>I was in charge of maintaining the system and any issues related to design. </p>',
      image: 'kudo_ai_single.png'
    }"
    :nextPage="'/portfolio/productManager'"
    :prevPage="'/portfolio/doctusTravel'"
  />
</template>

<script>
// @ is an alias to /src

import PortfolioContent from '../components/PortfolioContent'

export default {
  name: 'kudoAI',
  components: {
    PortfolioContent
  }
}
</script>

<style scoped lang="scss"></style>
