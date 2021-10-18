<template>
  <p>A propos</p>
</template>
<script>
export default {
  fetch () {
    this.$store.commit('setIsLightBG', true)
  }
}
</script>
