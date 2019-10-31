<template>
  <section class="info" :class="{'no-border': !border}">
    <h2 ><slot name="title"/></h2>
    <span ><slot name="description"/></span>
  </section>
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

<style scoped></style>
