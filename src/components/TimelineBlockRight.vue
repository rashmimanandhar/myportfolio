<template>
  <div class="timeline">
    <section></section>
    <AppTimelineInfo :border="this.border">
      <template slot="title">
        {{ content.title }}
      </template>

      <template slot="description">
        {{ content.description }}
      </template>
    </AppTimelineInfo>
    <AppTimelineCircle :border="this.border">
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
