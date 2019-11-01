<template>
  <PortfolioContent
    :pageColor="'#4CBFB2'"
    :imageColor="'#F6F6F6'"
    :content="{
      title: 'LEAD FRONTEND DEVELOPER',
      description:
        '<p>This system allows you to create multilingual conferences. You have the ability to join in the meeting and listen to the meeting in the language you desire. <br> <br>I was in charge of maintaining the system and any issues related to design. </p>',
      image: 'doctus_travel.png'
    }"
    :nextPage="'/portfolio/kudoAI'"
    :prevPage="'/portfolio/kudo'"
  />
</template>

<script>
// @ is an alias to /src

import PortfolioContent from '../components/PortfolioContent'

export default {
  name: 'doctusTravel',
  components: {
    PortfolioContent
  }
}
</script>

<style scoped lang="scss"></style>
