<template>
  <div :class="`cartMask ${cartMask?' activeCartMask':''}`">
    <div class="wrapCart" v-click-outside="closeMask">
      <div class="title">
        <h2>Корзина</h2>
        <div class="closeBtn" v-on:click="$store.commit('setCartMask',false)">
          <img src="~assets/icons/close.svg">
        </div>
      </div>
      <div v-if="!operator">
        <div v-if="cartItems.length">
          <div class="itemsCart">
            <h3>Товары в корзине</h3>
            <div class="itemCart" v-for="item in cartItems" :key="item.id">
              <div class="imgWrap">
                <img :src="baseURL + item.photo" :alt="item.name">
              </div>
              <div class="itemContent">
                <h4>{{ item.name }}</h4>
                <p>{{ item.price }} ₽</p>
                <div class="rate">
                  <span class="iconWrap"><Star v-bind:rating="item.rating"/></span>
                  <span>{{ item.rating }}</span>
                </div>
              </div>
              <div class="deleteItemBtn" v-on:click="deleteItem(item)">
                <img src="~assets/icons/trash.svg">
              </div>
            </div>
          </div>
          <div class="form">
            <h3>Оформить заказ</h3>
            <div class="wrapInput">
              <div>
                <input type="text" placeholder="Ваше имя" v-model="form.name.value" v-on:keyup="form.name.error =false">
                <span>{{ form.name.error ? form.name.messageError : '' }}</span>
              </div>
              <div>
                <input type="text"
                       placeholder="Телефон"
                       v-mask="'+7 (###) ###-##-##'"
                       v-model="form.phone.value"
                       v-on:keyup="form.phone.error =false">
                <span>{{ form.phone.error ? form.phone.messageError : '' }}</span>
              </div>
              <div>
                <input type="text" placeholder="Адрес" v-model="form.address.value"
                       v-on:keyup="form.address.error =false">
                <span>{{ form.address.error ? form.address.messageError : '' }}</span>
              </div>
            </div>
            <button v-on:click="call">Отправить</button>
          </div>
        </div>
        <div v-else>
          <p class="text">
            Пока что вы ничего не добавили
            в корзину.
          </p>
          <button v-on:click="$store.commit('setCartMask',false)">Перейти к выбору</button>
        </div>
      </div>
      <div v-else class="ok">
        <img src="~assets/icons/ok.jpg" alt="ok">
        <h2>Заявка успешно отправлена</h2>
        <p>Вскоре наш менеджер свяжется с Вами</p>
        <button v-on:click="$store.commit('setCartMask',false)">Перейти к выбору</button>
      </div>

    </div>
  </div>
</template>

<script>
import {baseURL} from "@/api";
import vClickOutside from 'v-click-outside'
import * as VueMask from "v-mask";

export default {
  name: "Cart",
  directives: {
    clickOutside: vClickOutside.directive,
    mask: VueMask.VueMaskDirective
  },
  data: () => ({
    baseURL,
    operator: false,
    form: {
      name: {
        value: '',
        error: false,
        messageError: ''
      },
      phone: {
        value: '',
        error: false,
        messageError: ''
      },
      address: {
        value: '',
        error: false,
        messageError: ''
      },
    },


  }),
  computed: {
    cartMask() {
      return this.$store.state.cartMask
    },
    cartItems() {
      return this.$store.state.cartItems
    }
  },
  methods: {
    call() {

      if (this.form.name.value && this.form.phone.value && this.form.address.value) {
        if (this.form.phone.value.length < 18) {
          this.form.phone.error = true
          this.form.phone.messageError = 'Введите корректный номер телефона!'
        } else {
          this.operator = true
          this.$cookies.set('catItems', [])
          this.$store.commit('setCartItems', [])
        }
      } else {
        for (let key in this.form) {
          if (!this.form[key].value) {
            this.form[key].error = true
            this.form[key].messageError = 'Обязательное поле!'
          }
        }
      }
    },
    deleteItem(item) {
      let newItems = this.cartItems.filter(el => el.id !== item.id)
      this.$cookies.set('catItems', newItems)
      this.$store.commit('setCartItems', newItems)
    },
    closeMask() {
      console.log(this.cartMask)
      if (this.cartMask == true) {
        this.$store.commit('setCartMask', false)
      }
    }

  },
}
</script>

<style scoped lang="scss">
@keyframes opacityMask {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, .45);
  }
}

@keyframes wrap {
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
}

.closeBtn {
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
  }
}

.cartMask.activeCartMask {
  display: block;
  animation: opacityMask 0.3s ease-in-out;

  .wrapCart {
    animation: wrap 0.3s ease-in-out;
  }
}

.cartMask {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, .45);
}

.wrapCart {
  position: relative;
  margin-left: auto;
  padding: 0 50px 50px;
  width: 100%;
  max-width: 460px;
  max-height: 100%;
  overflow: scroll;
  height: 100%;
  background: #FFFFFF;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
  @media (max-width: 450px) {
    padding: 0 15px 15px;
  }

  h3 {
    margin-bottom: 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #59606D;
  }
}

.title {
  position: sticky;
  top: 0;
  z-index: 100;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  background-color: #ffffff;
  @media (max-width: 450px) {
    padding-top: 15px;
  }

  h2 {
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    color: #000000;
  }
}

.itemsCart {
  margin-bottom: 32px;
}

.itemCart {
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 24px;
  margin-bottom: 12px;
  cursor: default;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);

  &:hover {
    box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.9);
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.form {
  input {
    width: 100%;
    padding: 14px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #1F1F1F;

    &::placeholder {
      color: #959DAD;
    }
  }

}

.wrapInput {
  margin-bottom: 24px;

  span {
    color: red;
  }

  div:not(:last-child) {
    margin-bottom: 16px;
  }
}

button {
  width: 100%;
  height: 50px;
}

.imgWrap {
  position: relative;
  width: 70px;
  height: 90px;

  img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.itemContent {
  max-width: 170px;
  width: 100%;

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #59606D;
    margin-bottom: 6px;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #1F1F1F;
    margin-bottom: 16px;
  }

  .rate {
    display: flex;
    align-items: center;

    .iconWrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      margin-right: 4px;
    }

    color: #F2C94C;
  }
}

.deleteItemBtn {
  cursor: pointer;

  img {
    filter: invert(74%) sepia(7%) saturate(580%) hue-rotate(182deg) brightness(83%) contrast(88%);
  }

  &:hover {
    img {
      filter: none;
    }
  }
}

.text {
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 24px;
}

.ok {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    margin-bottom: 2px;
    color: #000000;
  }

  p {
    margin: 0 0 30px 0;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #59606D;
  }
}
</style>
