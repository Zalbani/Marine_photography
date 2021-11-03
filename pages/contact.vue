<template>
  <main class="contact">
    <contact-info class="contact__info" />
    <contact-form class="contact__form" />
  </main>
</template>
<script>
import ContactInfo from '~/components/sections/ContactInfo'
import ContactForm from '~/components/sections/ContactForm'
export default {
  components: { ContactForm, ContactInfo },
  fetch () {
    this.$store.commit('setIsLightBG', true)
  }
}
</script>
<style lang="scss" scoped>
.contact{
  width: calc(100% - 160px);
  margin: 0 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  @media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: map-get($grid-breakpoints, 'sm')) {
    width: calc(100% - 20px);
    margin: 0 10px;
  }
  &__info, &__form{
    width: calc(50% - 80px);
    padding: 40px;
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
      width: calc(100% - 40px);
      padding: 20px;
    }
  }

}
</style>
