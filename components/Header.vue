<template>
  <header>
    <socials-color class="socials" :base-color="getSocialsBaseColor" />
    <nuxt-link to="/" class="home">
      Marine de stefano
    </nuxt-link>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/mon-travail">
            Mon travail
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/a-propos">
            À propos
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import SocialsColor from '~/components/socials/socials-color'
export default {
  components: { SocialsColor },
  computed: {
    getSocialsBaseColor () {
      if (process.client) {
        const width = window.innerWidth
        return (width < 960 ? 'black' : 'white')
      } else {
        return 'red'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  color: white;
  @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
    position: fixed;
    width: 100%;
    padding: 0;
    height: 100vh;
    background-color: white;
    color: black;
    z-index: 10;
  }
  nav {
    width: inherit;
    margin: 15px 0;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
      align-items: center;
      @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
        flex-direction: column;
      }
      li a {
        margin: 0 1.25vw;
        color: inherit;
        @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
          margin: 3vw 5vw;
          font-size: 6.6vmin;
          line-height: normal;
        }
      }
    }
  }

  .home{
    color: inherit;
    margin: 1.5vw 0;
    text-transform: uppercase;
    font-family: "Garamond", sans-serif;
    font-size: 2rem;
    line-height: 1.4rem;
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
      position: absolute;
      top: 20px;
      left: 10px;
      text-align: left;
    }
  }
  .socials{
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
      top: unset;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }

  }
}
</style>
