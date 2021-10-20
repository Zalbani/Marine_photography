<template>
  <ul class="WorkList">
    <div class="WorkList__background" :style="{ backgroundImage: `url(${backgroundUrl})` }" />
    <li class="WorkList__item" @mouseover="setBackgroundUrl('/image/project/oceane_3.jpg')" @mouseleave="resetImageUrl">
      <nuxt-link to="/project">
        Oceane
      </nuxt-link>
    </li>
    <li class="WorkList__item" @mouseover="setBackgroundUrl('/image/project/oceane_1.jpg')" @mouseleave="resetImageUrl">
      <nuxt-link to="/project">
        Mathias
      </nuxt-link>
    </li>
    <li class="WorkList__item" @mouseover="setBackgroundUrl('/image/project/oceane_2.jpg')" @mouseleave="resetImageUrl">
      <nuxt-link to="/project">
        Evah
      </nuxt-link>
    </li>
    <li class="WorkList__item" @mouseover="setBackgroundUrl('/image/project/oceane_4.jpg')" @mouseleave="resetImageUrl">
      <nuxt-link to="/project">
        Maeva X circe
      </nuxt-link>
    </li>
    <li class="WorkList__item" @mouseover="setBackgroundUrl('/image/project/oceane_5.jpg')" @mouseleave="resetImageUrl">
      <nuxt-link to="/project">
        Willy
      </nuxt-link>
    </li>
    <li class="WorkList__item" @mouseover="setBackgroundUrl('/image/project/oceane_6.jpg')" @mouseleave="resetImageUrl">
      <nuxt-link to="/project">
        Deborah
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      backgroundUrl: '/image/oceane.jpg'
    }
  },
  methods: {
    setBackgroundUrl (imageUrl) {
      this.backgroundUrl = imageUrl
    },
    resetImageUrl () {
      this.backgroundUrl = '/image/oceane.jpg'
    }
  }
}
</script>
<style lang="scss" scoped>
.WorkList {
  width: 100%;
  height: auto;
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
    background-image: url("/image/oceane.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}

</style>
