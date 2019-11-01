<template>
  <div class="circle-container" :class="position">
<!--    :class="[position === 'left' ? 'left' : 'right']"-->
    <section class="tl" :class="{ 'no-border': top }"></section>
    <section class="tr" :class="{ 'no-border': top }"></section>
    <div class="flex">
      <span class="circle">
        <slot />
      </span>
    </div>
    <section class="bl" :class="{ 'no-border': bottom }"></section>
    <section class="br" :class="{ 'no-border': bottom }"></section>
  </div>
</template>

<script>
export default {
  props: {
    top:{
      type: Boolean,
      required:false,
      default:false
    },
    bottom:{
      type: Boolean,
      required:false,
      default:false
    },
    position: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
