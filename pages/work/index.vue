<template>
  <main>
    <work-list />
  </main>
</template>
<script>
import WorkList from '~/components/sections/WorkList'
export default {
  components: { WorkList },
  fetch () {
    this.$store.commit('setIsLightBG', false)
  }
}
</script>
