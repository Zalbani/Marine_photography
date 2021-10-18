<template>
  <main>
    <Hero />
  </main>
</template>

<script>
import Hero from '~/components/sections/Hero'
export default {
  components: { Hero },
  fetch () {
    this.$store.commit('setIsLightBG', false)
  }
}
</script>
