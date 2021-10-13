<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </li>
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
export default {

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

  nav {
    width: inherit;

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
}
</style>
