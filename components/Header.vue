<template>
  <header>
    <socials-color class="socials" base-color="white" />
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
  components: { SocialsColor }
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
  nav {
    width: inherit;
    margin: 15px 0;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
      li {
        margin: 0 1.25vw;
        color: white;
      }
    }
  }

  .home{
    color: white;
    margin: 1.5vw 0;
    text-transform: uppercase;
    font-family: "Garamond", sans-serif;
    font-size: 2rem;
    line-height: 1.4rem;
  }
  .socials{
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
