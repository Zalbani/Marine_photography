<template>
  <p>Mon travail</p>
</template>
<script>
export default {
  fetch () {
    this.$store.commit('setIsLightBG', false)
  }
}
</script>
