<template>
  <nav class="main__header">
    <div class="container">
      <div class="header__contents">
        <h2 class="header__title">audiophile</h2>
        <ul class="header__lists">
          <router-link class="header__list" to="/">home</router-link>
          <router-link class="header__list" to="/headphone"
            >headphones</router-link
          >
          <router-link class="header__list" to="/speaker">speakers</router-link>
          <router-link class="header__list" to="/earphone"
            >earphones</router-link
          >
        </ul>
        <i class="fa-solid fa-cart-shopping" @click="isModal"></i>
      </div>
    </div>
  </nav>
  <aside :class="modal ? 'modal__body' : 'modal__none'">
    <div class="modal__overlay" @click="isModal"></div>
    <div class="modal__contents">
      <div class="modal__container">
        <div class="modal__header">
          <h3>cart({{ Cart.length }})</h3>
          <h4>Remove all</h4>
        </div>
        <div class="modal__content">
          <div class="modal__item"></div>
        </div>
        <div class="modal__total">
          <h4>total</h4>
          <h3>&dollar;{{ Total.toLocaleString("en-US") }}</h3>
        </div>
        <div :class="Cart.length > 0 ? 'modal__footer' : 'modal__footer--none'">
          <button @click="CheckoutButton">checkout</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { ref } from "vue";
import createStore from "../store/index";
let modal = ref(false);
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  setup() {
    const Cart = createStore.state.Cart;
    return {
      Cart,
      Total: 0,
    };
  },
  methods: {
    isModal() {
      modal.value = !modal.value;
    },
    CheckoutButton() {
      this.$router.push("/checkout");
      modal.value = !modal.value;
    },
  },
  data() {
    return {
      modal,
    };
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 1100px) {
  .main__header {
    width: 100%;
    height: 5em;
  }
  .header__contents {
    width: 100%;
    height: 5rem;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #979797;
  }
  .header__title {
    font-size: 19px;
    font-weight: 600;
    font-family: mantrope;
    text-align: start;
    color: #fff;
  }
  .header__lists {
    display: flex;
    list-style: none;
    .header__list {
      text-decoration: none;
      margin: 0rem 1rem;
      text-transform: capitalize;
      font-size: 13px;
      font-weight: bold;
      padding: 0px 2px;
      color: #fff;
      line-height: 25px;
    }
    .header__list:hover {
      color: #d87d4a;
      cursor: pointer;
    }
  }
  i {
    color: #fff;
    margin-top: 0.3rem;
    cursor: pointer;
  }
  i:hover {
    color: #d87d4a;
    cursor: pointer;
  }
  .modal__body {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 4.95rem;
    background-color: rgba(0, 0, 0, 0.814);
  }
  .modal__none {
    display: none;
  }
  .modal__contents {
    width: 26rem;
    min-height: 5rem;
    background-color: #fff;
    position: relative;
    left: 55%;
    top: -95%;
    border-radius: 5px;
  }
  .modal__overlay {
    width: 100%;
    height: 100%;
  }
  .modal__container {
    width: 90%;
    margin: auto;
  }
  .modal__header {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 2rem;
    h3 {
      color: #000;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 18px;
      line-height: 25px;
    }
    h4 {
      font-size: 15px;
      font-weight: normal;
      line-height: 25px;
      color: rgba(0, 0, 0, 0.518);
      cursor: pointer;
    }
    h4:hover {
      color: #d87d4a;
    }
  }
  .modal__content {
    width: 100%;
    min-height: 3rem;
  }
  .modal__total {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    h3 {
      color: #000;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 18px;
      line-height: 25px;
    }
    h4 {
      font-size: 15px;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 25px;
      color: rgba(0, 0, 0, 0.518);
      cursor: pointer;
    }
  }
  .modal__footer {
    width: 100%;
    height: 4rem;
    button {
      width: 100%;
      padding: 0rem 1rem;
      height: 3rem;
      color: #fff;
      background-color: #d87d4a;
      border: solid 2px transparent;
      border-radius: 3px;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 2px;
      cursor: pointer;
      &:hover {
        background-color: #fbaf85;
      }
    }
  }
  .modal__footer--none {
    display: none;
  }
}
</style>
