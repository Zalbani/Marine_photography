<template>
  <header>
    <div class="hamburger" @click="menuActive = !menuActive" />
    <nuxt-link to="/" :class="['home', {'home--black':menuActive}]">
      Marine de stefano
    </nuxt-link>
    <nav :class="{menuActive : menuActive}">
      <socials-color class="socials socials-pc" base-color="white" />
      <socials-color class="socials socials--mobile" base-color="black" />
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
  data () {
    return {
      menuActive: false
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  color: white;
  .hamburger{
    z-index: 20;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    background-color: red;
    display: none;
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
      display: block;
    }
  }

  .home{
    z-index: 20;
    color: white;
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
    &--black{
      color: black;
    }
  }
  .socials{
    z-index: 20;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
      display: none;
      top: unset;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
    &--pc{
      display: flex;
      @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
        display: none;
      }
    }
    &--mobile{
      display: none;
      @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
        display: flex;
      }
    }
  }

  nav {
    width: 100%;
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
      position: fixed;
      top: 0;
      margin: 0;
      width: 100%;
      padding: 0;
      height: 100vh;
      background-color: white;
      color: black;
      z-index: 10;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      visibility: hidden;
      opacity: 0;
      transition: visibility 1s, opacity 0.5s linear;
      &.menuActive {
        visibility: visible;
        opacity: 1;
        .socials{
          display: flex;
        }
      }
    }
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

}
@keyframes fadein {
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
}

@keyframes fadeout {
  from {
    display: flex!important;
    opacity:1;
  }
  to {
    display: none;
    opacity:0;
  }
}
</style>
