<template>
  <div>
    <Header/>
    <div class="mainContainer">
      <div class="contentPageWrap">
        <NabBar/>
        <nuxt/>
      </div>
      <template v-if="cart">
        <Cart/>
      </template>
    </div>
    <Footer/>
  </div>

</template>

<script>
export default {
  name: "catalogLayout",
  props: ["inputData"],
  computed: {
    cart() {
      return this.$store.state.cartMask
    }
  },
  watch: {
    cart(val) {
      if (val == true) {
        document.querySelector('body').classList.add('blockScroll')
      } else {
        document.querySelector('body').classList.remove('blockScroll')
      }
    }
  },
}
</script>

<style scoped lang="scss">



.contentPageWrap {
  position: relative;
  padding-top: 32px;
  display: grid;
  grid-template-columns: 146px 1fr;
  grid-column-gap: 14px;
  @media  (max-width:460px ) {
    grid-template-columns: 1fr;
  }
}
</style>
