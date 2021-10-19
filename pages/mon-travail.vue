<template>
  <main>
    <p>Mon travail</p>
  </main>
</template>
<script>
export default {
  fetch () {
    this.$store.commit('setIsLightBG', false)
  }
}
</script>
