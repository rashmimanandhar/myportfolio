<template>
  <PortfolioContent
    :pageColor="'#7989AE'"
    :imageColor="'#F0F3F7'"
    :content="{
      title: 'KUDO FRONTEND DEVELOPER',
      description:
        '<p>This system allows you to create multilingual conferences. You have the ability to join in the meeting and listen to the meeting in the language you desire. <br> <br>I was in charge of maintaining the system and any issues related to design. </p>',
      image: 'session_console.png'
    }"
    :nextPage="'/portfolio/doctusTravel'"
  />
</template>

<script>
// @ is an alias to /src

import PortfolioContent from '../components/PortfolioContent'

export default {
  name: 'KUDO',
  components: {
    PortfolioContent
  }
}
</script>

<style scoped lang="scss"></style>
