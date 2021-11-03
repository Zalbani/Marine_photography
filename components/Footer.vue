<template>
  <footer class="footer">
    <div class="footer__topInfo">
      <h3>MARINE DE STEFANO</h3>
      <h4>Photographe de portrait et de mode</h4>
      <hr>
      <p>marine.destefano@gmail.com</p>
    </div>
    <hr>
    <section class="footer__link">
      <ul class="footer__linkTable">
        <li>
          <nuxt-link to="/work">
            Mon travail
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/work/1">
            Océane
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/work/2">
            Mathias
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/work/3">
            Evah
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/work/4">
            Maeva x Circé
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/work/5">
            Willy
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/work/6">
            Déborah
          </nuxt-link>
        </li>
      </ul>
      <ul class="footer__linkTable">
        <li>
          <nuxt-link to="/a-propos">
            À propos
          </nuxt-link>
        </li>
      </ul>
      <ul class="footer__linkTable">
        <li>
          <nuxt-link to="/contact">
            Contact
          </nuxt-link>
        </li>
      </ul>
      <socials-color class="footer__linkSocial" />
    </section>
  </footer>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: $bg-color;
  width: calc(100% - 16vw);
  padding: 20px 8vw 0 8vw;
  &__topInfo{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding-bottom: 20px;
    text-align: center;
    h3{
      margin-top: unset;
    }
    hr{
      width: 20px;
    }
  }
  &__link {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    width: 100%;
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
      flex-direction: column;
    }
    &Table {
      flex-direction: column;
      width: calc(25% - 40px);
      padding: 20px;
      @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
        width: calc(100% - 20px);
        padding: 10px;
      }
      li {
        margin: 0.75rem 0;
        a{
          text-decoration: none;
          color: black;
        }
        &:first-of-type a{
          text-decoration: underline;
          text-underline-offset: 10px;
          text-decoration-thickness: 2px;
          font-size: 24px;
          line-height: 34px;
          color: $primary;
        }
      }
    }
    &Social {
      width: calc(25% - 40px);
      padding: 20px;
    }
  }
}
</style>
