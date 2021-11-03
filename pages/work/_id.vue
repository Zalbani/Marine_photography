<template>
  <main class="project">
    <p class="project__date">
      2020 - {{ id }}
    </p>
    <h2 class="project__title">
      Titre
    </h2>
    <p class="project__description">
      description
    </p>
    <ul class="project__imageGrid">
      <li><img src="/images/work/oceane_1.jpg"></li>
      <li><img src="/images/work/oceane_2.jpg"></li>
      <li><img src="/images/work/oceane_3.jpg"></li>
      <li><img src="/images/work/oceane_4.jpg"></li>
      <li><img src="/images/work/oceane_5.jpg"></li>
      <li><img src="/images/work/oceane_6.jpg"></li>
    </ul>
  </main>
</template>
<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  fetch () {
    this.$store.commit('setIsLightBG', true)
  }
}
</script>
<style lang="scss" scoped>
.project{
  background-color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  &__imageGrid{
    padding: 40px;
    width: calc(100% - 80px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
      padding: 20px 10px;
      width: calc(100% - 20px);
    }
    li{
      padding: 10px;
      width: calc(33% - 20px);
      @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
        padding: 5px;
        width: calc(50% - 10px);
      }
    }
  }
}
</style>
