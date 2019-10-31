<template>
  <div class="circle-container">
    <section class="tl" :class="{'no-border': !border}"></section>
    <section class="tr" :class="{'no-border': !border}"></section>
    <div class="flex">
      <span class="circle">
        <slot/>
      </span>
    </div>
    <section class="bl"></section>
    <section class="br"></section>
  </div>
</template>

<script>
  export default {
    props: {
      border: {
        type: Boolean,
        required: true
      },
    },
  }
</script>

<style scoped>

</style>
