<template>
  <div class="item">
    <div class="star">
      <span class="iconWrap"><Star v-bind:rating="item.rating"/></span>
      <span>{{ item.rating }}</span>
    </div>
    <div class="cartIcon">
      <img src="~assets/icons/cart.svg" v-on:click="addCart(item)" :class="itemActive?'active':''">
    </div>
    <div class="imgWrap">
      <img :src="baseURL + item.photo" alt="">
    </div>
    <h2>{{ item.name }}</h2>
    <p>{{ item.price }} ₽</p>
  </div>
</template>

<script>
import {baseURL} from "@/api";

export default {
  name: "ItemCatalog",
  props: ["item"],
  data: () => ({
    baseURL,
    itemActive: false,
  }),
  methods: {
    addCart(el) {
      if (this.itemActive) {
        let newCatItems = []
        const cookieCatItems = this.$cookies.get('catItems')
        if (cookieCatItems) {
          newCatItems = cookieCatItems.filter(e => el.id !== e.id)
          this.$cookies.set('catItems', newCatItems)
          this.$store.commit('setCartItems', newCatItems)
          this.itemActive = false
        }
      } else {
        const cookieCatItems = this.$cookies.get('catItems')
        let newCatItems = []
        if (cookieCatItems) {
          newCatItems = cookieCatItems
        }
        newCatItems.push(el)
        this.$cookies.set('catItems', newCatItems)
        this.$store.commit('setCartItems', newCatItems)
        this.itemActive = true
      }
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    }
  },
  beforeMount() {
    const cookieCatItems = this.$cookies.get('catItems')
    if (cookieCatItems) {
      let item = cookieCatItems.find(el => el.id == this.item.id)
      if (item) {
        this.itemActive = true
      }
    }
  },
  watch: {
    cartItems(val) {
      let item = val.find(el => el.id == this.item.id)
      if (item) {
        this.itemActive = true
      } else {
        this.itemActive = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  position: relative;
  padding: 18px;
  transition: all 0.5s;
  cursor: default;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);

  &:hover {
    box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.9);
    .imgWrap{
      transform: scale(1.2);
    }
  }

  h2 {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 6px;
  }

  p {
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
  }
}

.imgWrap {
  transition: all 0.3s;
  position: relative;
  width: 100%;
  max-width: 142px;
  margin: 0 auto;
  height: 180px;
  z-index: -1;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.star {
  position: absolute;
  left: 18px;
  top: 18px;
  display: flex;
  align-items: center;
  color: #F2C94C;
  .iconWrap{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }

}

.cartIcon {
  position: absolute;
  right: 18px;
  top: 18px;

  &:hover {
    img {
      filter: invert(0%) sepia(8%) saturate(31%) hue-rotate(338deg) brightness(94%) contrast(106%);
    }
  }

  img {
    cursor: pointer;
    filter: invert(100%) sepia(89%) saturate(1455%) hue-rotate(177deg) brightness(69%) contrast(94%);
  }

  .active {
    filter: invert(54%) sepia(69%) saturate(579%) hue-rotate(76deg) brightness(92%) contrast(93%) !important;
  }
}

</style>
