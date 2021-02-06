<template>
  <div class="header">
    <div class="mainContainer headerWrap">
      <h1>IDA
      </h1>
      <div v-on:click="$store.commit('setCartMask',true)" :class="`cart ${animate?'active':''}`">
        <img src="~assets/icons/cartBig.svg">
        <span>{{ number }}</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Header",
  data: () => ({
    animate: false
  }),
  computed: {
    number() {
      return this.$store.state.cartItems.length
    }
  },
  watch: {
    number() {
      this.animate = true
      setTimeout(() => {
        this.animate = false
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffff;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

  .headerWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 66px;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 28px;
    color: #59606D;
  }

  .cart.active {
    img {
      animation: 1.2s ease-in-out 0s normal none infinite running anim;
    }
  }

  .cart {
    cursor: pointer;
    position: relative;

    &:hover {


      span {
        width: 16px;
        height: 16px;
        font-size: 10px;
      }
    }

    span {
      transition: all 0.3s;
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(30%, -30%);
      font-style: normal;
      font-weight: bold;
      font-size: 8px;
      line-height: 10px;
      color: #FFFFFF;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #959DAD;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

@keyframes anim {
  0%, 50%, 100% {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
  }
  10%, 30% {
    transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
  }
  20%, 40% {
    transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
  }
}
</style>
