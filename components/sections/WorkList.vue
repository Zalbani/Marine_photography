<template>
  <ul class="workList">
    <div class="workList__background" :style="{ backgroundImage: `url(${backgroundUrl})` }" />
    <img class="loadImage" src="/images/work/oceane_1.jpg">
    <img class="loadImage" src="/images/work/oceane_2.jpg">
    <img class="loadImage" src="/images/work/oceane_3.jpg">
    <img class="loadImage" src="/images/work/oceane_4.jpg">
    <img class="loadImage" src="/images/work/oceane_5.jpg">
    <img class="loadImage" src="/images/work/oceane_6.jpg">
    <li class="workList__item" @mouseover="setBackgroundUrl('/images/work/oceane_3.jpg')" @mouseleave="resetImageUrl">
      <nuxt-link to="/work/1">
        Oceane
      </nuxt-link>
    </li>
    <li class="workList__item" @mouseover="setBackgroundUrl('/images/work/oceane_1.jpg')" @mouseleave="resetImageUrl">
      <nuxt-link to="/work/2">
        Mathias
      </nuxt-link>
    </li>
    <li class="workList__item" @mouseover="setBackgroundUrl('/images/work/oceane_2.jpg')" @mouseleave="resetImageUrl">
      <nuxt-link to="/work/3">
        Evah
      </nuxt-link>
    </li>
    <li class="workList__item" @mouseover="setBackgroundUrl('/images/work/oceane_4.jpg')" @mouseleave="resetImageUrl">
      <nuxt-link to="/work/4">
        Maeva X circe
      </nuxt-link>
    </li>
    <li class="workList__item" @mouseover="setBackgroundUrl('/images/work/oceane_5.jpg')" @mouseleave="resetImageUrl">
      <nuxt-link to="/work/5">
        Willy
      </nuxt-link>
    </li>
    <li class="workList__item" @mouseover="setBackgroundUrl('/images/work/oceane_6.jpg')" @mouseleave="resetImageUrl">
      <nuxt-link to="/work/6">
        Deborah
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      backgroundUrl: '/images/oceane.jpg'
    }
  },
  methods: {
    setBackgroundUrl (imageUrl) {
      this.backgroundUrl = imageUrl
    },
    resetImageUrl () {
      this.backgroundUrl = '/images/oceane.jpg'
    }
  }
}
</script>
<style lang="scss" scoped>
.workList {
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  color: white;
  &__item a {
    font-family: 'Garamond', serif;
    font-size: 5em;
    padding: 4rem 0;
  }

  &__background {
    z-index: -1;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    transition: background-image 0.2s ease-in-out;
    background-image: url("/images/oceane.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
.loadImage{
  width: 0;
  height: 0;
  visibility: hidden;
}
</style>
