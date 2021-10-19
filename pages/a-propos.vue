<template>
  <main><p>A propos</p></main>
</template>
<script>
export default {
  fetch () {
    this.$store.commit('setIsLightBG', true)
  }
}
</script>
