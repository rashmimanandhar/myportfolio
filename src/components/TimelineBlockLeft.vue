<template>
  <div class="timelineBlock">
    <AppTimelineCircle :position="'left'" :top="this.top" :bottom="this.bottom">
      {{ content.year }}
    </AppTimelineCircle>
    <AppTimelineInfo :top="this.top">
      <template slot="title" >
        {{ content.title }}
      </template>

      <template slot="description">
        <p v-html="content.description"></p>
      </template>
    </AppTimelineInfo>
    <section></section>
  </div>
</template>

<script>
import timelineBorder from '../mixins/timelineBorder'

export default {
  mixins: [timelineBorder]
}
</script>

<style lang="scss" src="../timeline.scss"></style>
