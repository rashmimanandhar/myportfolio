<template>
  <section class="info" :class="{'no-border': top}">
    <h2 ><slot name="title"/></h2>
    <span ><slot name="description"/></span>
  </section>
</template>

<script>
export default {
  props: {
    top: {
      type: Boolean,
      required: false,
      default:false
    },
  },
}
</script>

<style scoped></style>
