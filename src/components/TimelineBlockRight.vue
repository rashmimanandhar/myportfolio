<template>
  <div class="timelineBlock">
    <section></section>
    <AppTimelineInfo :border="this.border">
      <template slot="title">
        {{ content.title }}
      </template>

      <template slot="description">
        <p v-html="content.description"></p>
      </template>
    </AppTimelineInfo>
    <AppTimelineCircle :border="this.border" :position="'right'"  :top="this.top" :bottom="this.bottom">
      {{ content.year }}
    </AppTimelineCircle>
  </div>
</template>

<script>
  import timelineBorder from '../mixins/timelineBorder'

  export default {
    mixins: [timelineBorder]
  }
</script>

<style lang="scss" src="../timeline.scss"></style>
