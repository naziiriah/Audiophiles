<template>
  <div>
    <header class="product__header"><Header /></header>
    <main class="checkout__main">
      <section class="container checkout__container">
        <h2 class="goback__text" @click="goBack">go back</h2>
      </section>
      <section class="container">
        <div class="checkout__content">
          <section class="checkout__form">
            <div class="checkout__contain">
              <h2 class="checkout__name">checkout</h2>
            </div>
            <form class="checkout__form--section">
              <div class="checkout__name--div">
                <h2 class="checkout__section__name">billing details</h2>
                <div class="checkout__name--grid">
                  <div class="checkout__name--section">
                    <label for="name" class="checkout__label">name</label>
                    <input
                      class="checkout__name--input"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Alexander Drought"
                    />
                  </div>
                  <div class="checkout__name--section">
                    <label for="name" class="checkout__label"
                      >email address</label
                    >
                    <input
                      class="checkout__name--input"
                      type="email"
                      name="email"
                      id=""
                      placeholder="anderew@gmail.com"
                    />
                  </div>
                  <div class="checkout__name--section">
                    <label for="name" class="checkout__label"
                      >phone number</label
                    >
                    <input
                      class="checkout__name--input"
                      type="number"
                      name="name"
                      id=""
                      placeholder="+1 234-555-0123"
                    />
                  </div>
                </div>
              </div>
              <div class="checkout__name--div">
                <h2 class="checkout__section__name">shipping info</h2>

                <div class="checkout__name--section">
                  <div class="checkout__shipping--grid--1">
                    <label for="name" class="checkout__label">Address</label>
                    <input
                      class="checkout__name--input"
                      type="text"
                      name="address"
                      id=""
                      placeholder="Alexander Drought"
                    />
                  </div>
                </div>
                <div class="checkout__shipping--grid">
                  <div class="checkout__name--section">
                    <label for="name" class="checkout__label">ZIP code</label>
                    <input
                      class="checkout__name--input"
                      type="number"
                      name="zip"
                      id=""
                      placeholder="100932"
                    />
                  </div>
                  <div class="checkout__name--section">
                    <label for="name" class="checkout__label">City</label>
                    <input
                      class="checkout__name--input"
                      type="text"
                      name="city"
                      id=""
                      placeholder="New York"
                    />
                  </div>
                  <div class="checkout__name--section">
                    <label for="name" class="checkout__label">Country</label>
                    <input
                      class="checkout__name--input"
                      type="text"
                      name="country"
                      id=""
                      placeholder="United State"
                    />
                  </div>
                </div>
              </div>
              <div class="checkout__name--div">
                <h2 class="checkout__section__name">payment detail</h2>
                <div class="checkout__name--grid">
                  <div class="checkout__name--section">
                    <label for="name" class="checkout__label"
                      >payments method</label
                    >
                  </div>
                  <div class="checkout__name--section">
                    <div
                      :class="
                        PaymentType === 'e-money'
                          ? 'input__payment--active'
                          : 'input__payment'
                      "
                      @click="PaymentTypeChange('e-money')"
                    >
                      <div class="input__radio--outlier">
                        <div
                          :class="
                            PaymentType === 'e-money'
                              ? 'input__radio--inlier--active'
                              : 'input__radio--inlier'
                          "
                        ></div>
                      </div>
                    </div>
                    <div
                      :class="
                        PaymentType === 'cash'
                          ? 'input__payment--active'
                          : 'input__payment'
                      "
                      @click="PaymentTypeChange('cash')"
                    >
                      <div class="input__radio--outlier">
                        <div
                          :class="
                            PaymentType === 'cash'
                              ? 'input__radio--inlier--active'
                              : 'input__radio--inlier'
                          "
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  :class="
                    PaymentType === 'e-money'
                      ? 'checkout__name--grid'
                      : 'checkout__name--grid--inactive'
                  "
                >
                  <div class="checkout__name--section">
                    <label for="name" class="checkout__label"
                      >e-money number</label
                    >
                    <input
                      class="checkout__name--input"
                      type="number"
                      name="number"
                      id=""
                      placeholder="1234 555 0123"
                    />
                  </div>
                  <div class="checkout__name--section">
                    <label for="name" class="checkout__label"
                      >e-money pin</label
                    >
                    <input
                      class="checkout__name--input"
                      type="number"
                      name="number"
                      id=""
                      placeholder="****"
                    />
                  </div>
                </div>
                <div
                  :class="
                    PaymentType === 'cash'
                      ? 'cash--display'
                      : 'checkout__name--grid--inactive'
                  "
                >
                  <img src="../assets/Shape.png" alt="hands on hands png" />
                  <p class="cash__display--text">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              </div>
            </form>
          </section>
          <aside class="checkout__aside">
            <div class="checkout__contains">
              <h2 class="checkout__summary">summary</h2>
              <div class="modal__content">
                <div :key="item.id" class="modal__item" v-for="item in Cart">
                  <img
                    class="modal__item--img"
                    :src="item.image.desktop"
                    :alt="item.slug"
                  />
                  <div class="modal__item--identity">
                    <h1>{{ item.name.slice(0, 4) }}</h1>
                    <h3>&dollar; {{ item.price.toLocaleString("en-US") }}</h3>
                  </div>
                  <div class="modal__number--value">
                    <h4>x{{ item.value }}</h4>
                  </div>
                </div>
              </div>
              <div class="checkout__summary--bill">
                <h2>Total</h2>
                <h1>&dollar;{{ Total }}</h1>
                <h2>shipping</h2>
                <h1>&dollar;{{ shipping.toLocaleString("en-US") }}</h1>
                <h2>vat(included)</h2>
                <h1>&dollar;{{ vat.toLocaleString("en-US") }}</h1>
              </div>
              <div class="checkout__summary--bill">
                <h4>Grand Total</h4>
                <h3>&dollar;{{ GrandTotal.toLocaleString("en-US") }}</h3>
              </div>
              <button class="checkout__final__button" @click="modalChange">
                continue
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
    <div
      :class="FinalCheckModal ? 'final__section' : 'final__section__disable'"
    >
      <div class="final__section--container" @click="modalChange"></div>
      <div class="final__section__content">
        <div class="modal__container">
          <div class="final__modal--header">
            <i class="fa-solid fa-check"></i>
          </div>
          <h1 class="final__modal--h1">
            thank you <br />
            for your order.
          </h1>
          <small class="final__modal--small"
            >You will receive an email confirmation shortly.</small
          >
          <section class="final__modal--content">
            <div class="final__modal--content--1">
              <div class="container">
                <div class="final__modal--main--content">
                  <div class="modal__item">
                    <img
                      class="modal__item--img"
                      :src="Item.image.desktop"
                      :alt="Item.slug"
                    />
                    <div class="modal__item--identity--modal">
                      <h1>{{ Item.name.slice(0, 4) }}</h1>
                      <h3>&dollar; {{ Item.price.toLocaleString("en-US") }}</h3>
                    </div>
                    <div class="modal__number--value">
                      <h4>x{{ Item.value }}</h4>
                    </div>
                  </div>
                </div>
                <div
                  :class="
                    remainingLenght === 0
                      ? 'final__section__disable'
                      : 'final__modal__lengt'
                  "
                >
                  <h5>and {{ remainingLenght }} other item(s).</h5>
                </div>
              </div>
            </div>
            <div class="final__modal--content--2">
              <div class="container">
                <h1 class="final__modal--content--2--h1">grand total</h1>
                <h2 class="final__modal--content--2--h2">
                  &dollar;{{ GrandTotal.toLocaleString("en-US") }}
                </h2>
              </div>
            </div>
          </section>
          <button class="checkout__final__button" @click="toHome">
            back to home
          </button>
          <div class="final__modal__end"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { ref } from "vue";
import createStore from "../store/index";

const PaymentType = ref("e-money");
const FinalCheckModal = ref(false);
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Checkout",
  components: { Header },
  setup() {
    const Cart = createStore.state.Cart;
    const Total = Cart.map((state) => state.value * state.price).reduce(
      (state, total) => total + state,
      0
    );
    const remainingLenght = Cart.length - 1;
    const Item = Cart[0];
    const vat = 1057;
    const shipping = 50;
    const GrandTotal = Total + shipping;
    return {
      Cart,
      Total,
      GrandTotal,
      Item,
      remainingLenght,
      shipping,
      vat,
    };
  },
  data() {
    return {
      PaymentType,
      FinalCheckModal,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    PaymentTypeChange(type) {
      PaymentType.value = type;
    },
    modalChange() {
      FinalCheckModal.value = !FinalCheckModal.value;
    },
    toHome() {
      this.$router.push("/");
      createStore.dispatch("emptyCart");
    },
  },
};
</script>
<style lang="scss">
@media screen and (min-width: 1100px) {
  .checkout__main {
    width: 100%;
    margin: auto;
    height: 80rem;
    background-color: #f2f2f2;
  }
  .goback__text {
    text-align: start;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.582);
    line-height: 25px;
    text-transform: capitalize;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #d87d4a;
      cursor: pointer;
      color: #d87d4a;
    }
  }
  .checkout__container {
    padding-top: 4rem;
  }
  .checkout__content {
    width: 100%;
    height: 30rem;
    display: flex;
    justify-content: start;
    margin: 2rem 0rem 0rem;
  }
  .checkout__form {
    width: 55%;
    min-height: 65rem;
    background-color: #fff;
    border-radius: 5px;
    margin-right: 4%;
  }
  .checkout__aside {
    width: 30%;
    min-height: 30rem;
    background-color: #fff;
    border-radius: 5px;
  }
  .checkout__section__name {
    text-align: start;
    color: #d87d4a;
    font-size: 13px;
    line-height: 35px;
    font-weight: bold;
    text-transform: capitalize;
  }
  .checkout__summary {
    width: 90%;
    height: 4rem;
    line-height: 25px;
    font-weight: bold;
    text-transform: uppercase;
    font-weight: 18px;
    margin-top: 1rem;
    text-align: start;
  }
  .checkout__name {
    width: 100%;
    text-align: start;
    margin: 2rem 0rem 2rem;
    text-transform: uppercase;
    font-size: 32px;
    line-height: 36px;
    font-weight: bold;
  }
  .checkout__contain {
    width: 90%;
    min-height: 1rem;
    margin: auto;
  }
  .checkout__contains {
    width: 90%;
    min-height: 10rem;
    margin: auto;
    background-color: #fff;
    border-radius: 5px;
  }
  .checkout__form--section {
    width: 90%;
    margin: auto;
  }
  .checkout__name--div {
    width: 100%;
  }
  .checkout__name--grid {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 45% 45%;
  }
  .checkout__name--grid {
    width: 100%;
    display: grid;
    margin-bottom: 3rem;
    gap: 1rem;
    grid-template-columns: 45% 45%;
  }
  .checkout__name--section {
    width: 100%;
  }
  .checkout__label {
    width: 100%;
    line-height: 35px;
    color: #000;
    display: inline-block;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    text-align: start;
  }
  .checkout__name--input {
    width: 100%;
    border: #cfcfcf solid 1px;
    height: 35px;
    border-radius: 5px;
    padding-left: 1rem;
  }
  .checkout__shipping--grid {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 45% 45%;
    margin-bottom: 3rem;
  }
  .checkout__shipping--grid--1 {
    width: 94%;
    margin-bottom: 0.8rem;
  }
  .input__payment {
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    border: solid 1px #cfcfcf;
    margin-bottom: 1rem;
    display: flex;
    padding-left: 1rem;
    justify-content: start;
    cursor: pointer;
  }
  .input__payment--active {
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    border: solid 1px #d87d4a;
    margin-bottom: 1rem;
    display: flex;
    padding-left: 1rem;
    justify-content: start;
    cursor: pointer;
  }
  .input__radio--outlier {
    border: #cfcfcf solid 2px;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-top: 1rem;
  }
  .input__radio--inlier--active {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: #d87d4a;
    margin: 0.1rem auto;
  }
  .input__radio--inlier {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    margin: 0.1rem auto;
  }
  .checkout__name--grid--inactive {
    display: none;
  }
  .cash--display {
    width: 100%;
    display: flex;
    justify-content: start;
    img {
      width: 3rem;
      height: 3rem;
      margin-top: 1rem;
    }
    .cash__display--text {
      width: 80%;
      margin-left: 2rem;
      line-height: 25px;
      font-size: 15px;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.507);
      text-align: start;
    }
  }
  .checkout__final__button {
    width: 100%;
    margin: auto;
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
  .final__section {
    width: 100%;
    height: 255vh;
    background-color: rgba(0, 0, 0, 0.616);
    position: absolute;
    top: 0rem;
  }
  .final__section__disable {
    display: none;
  }
  .final__section--container {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.216);
  }
  .final__section__content {
    min-height: 30rem;
    width: 30rem;
    position: absolute;
    left: 35%;
    top: 6rem;
    background-color: #fff;
    border-radius: 5px;
  }
  .final__modal--header {
    margin: 2rem 0rem 1rem;
    width: 4rem;
    height: 4rem;
    background-color: #d87d4a;
    border-radius: 50%;
    i {
      font-size: 33px;
      margin-top: 1rem;
    }
    clear: both;
  }
  .final__modal--h1 {
    text-align: start;
    font-size: 32px;
    line-height: 36px;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  .final__modal--small {
    text-align: start;
    font-size: 15px;
    line-height: 25px;
    display: flex;
    justify-content: start;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.61);
  }
  .final__modal--content {
    width: 100%;
    height: 10rem;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
  }
  .final__modal__end {
    width: 100%;
    height: 2rem;
  }
  .final__modal--content--1 {
    width: 60%;
    height: 100%;
    background-color: #f1f1f1;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .final__modal--content--2 {
    width: 40%;
    height: 100%;
    background-color: #000;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .final__modal--content--2--h1 {
    font-size: 15px;
    margin-top: 6rem;
    font-weight: normal;
    line-height: 25px;
    text-transform: uppercase;
    text-align: start;
    color: rgba(255, 255, 255, 0.671);
  }
  .final__modal--content--2--h2 {
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    text-transform: uppercase;
    text-align: start;
    color: rgba(255, 255, 255);
  }
  .final__modal--main--content {
    width: 100%;
    min-height: 6rem;
    border-bottom: grey 1px solid;
  }
  .modal__item--identity--modal {
    width: 4rem;
    height: 100%;
    margin-top: 0.5rem;
    h1 {
      font-size: 15px;
      line-height: 25px;
      font-weight: bold;
      text-align: start;
      color: rgba(0, 0, 0);
    }
    h3 {
      font-size: 14px;
      line-height: 25px;
      font-weight: bold;
      text-align: start;
      color: rgba(0, 0, 0, 0.363);
    }
  }
  .final__modal__lengt {
    width: 100%;
    h5 {
      text-align: center;
      line-height: 33px;
      margin-top: 0.5rem;
      font-size: 13px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.842);
    }
  }
  .checkout__summary--bill {
    width: 100%;
    min-height: 4rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 50% 45%;
    margin-top: 1rem;
    h1 {
      text-align: end;
      height: 1rem;
      line-height: 25px;
      font-size: 18px;
      font-weight: bold;
      color: rgba(0, 0, 0);
    }
    h2 {
      text-align: start;
      height: 1rem;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.575);
      font-size: 15px;
      font-weight: normal;
      line-height: 25px;
    }
    h3 {
      text-align: end;
      height: 1rem;
      line-height: 25px;
      font-size: 18px;
      font-weight: bold;
      color: #d87d4a;
      margin-top: 2rem;
    }
    h4 {
      text-align: start;
      height: 1rem;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.575);
      font-size: 15px;
      font-weight: normal;
      line-height: 25px;
      margin-top: 2rem;
    }
  }
}
@media screen and (max-width: 1100px) and (min-width: 600px) {
  .checkout__main {
    width: 100%;
    margin: auto;
    min-height: 80rem;
    background-color: #f2f2f2;
  }
  .goback__text {
    text-align: start;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.582);
    line-height: 25px;
    text-transform: capitalize;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #d87d4a;
      cursor: pointer;
      color: #d87d4a;
    }
  }
  .checkout__container {
    padding-top: 4rem;
  }
  .checkout__content {
    width: 100%;
    min-height: 30rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: 100%;
    margin: 2rem 0rem 0rem;
  }
  .checkout__form {
    width: 100%;
    min-height: 65rem;
    background-color: #fff;
    border-radius: 5px;
    margin-right: 4%;
  }
  .checkout__aside {
    width: 100%;
    min-height: 30rem;
    background-color: #fff;
    border-radius: 5px;
    margin: 2rem 0rem 2rem;
  }
  .checkout__section__name {
    text-align: start;
    color: #d87d4a;
    font-size: 13px;
    line-height: 35px;
    font-weight: bold;
    text-transform: capitalize;
  }
  .checkout__summary {
    width: 90%;
    height: 4rem;
    line-height: 25px;
    font-weight: bold;
    text-transform: uppercase;
    font-weight: 18px;
    margin-top: 1rem;
    text-align: start;
  }
  .checkout__name {
    width: 100%;
    text-align: start;
    margin: 2rem 0rem 2rem;
    text-transform: uppercase;
    font-size: 32px;
    line-height: 36px;
    font-weight: bold;
  }
  .checkout__contain {
    width: 90%;
    min-height: 1rem;
    margin: auto;
  }
  .checkout__contains {
    width: 90%;
    min-height: 10rem;
    margin: auto;
    background-color: #fff;
    border-radius: 5px;
  }
  .checkout__form--section {
    width: 90%;
    margin: auto;
  }
  .checkout__name--div {
    width: 100%;
  }
  .checkout__name--grid {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 45% 45%;
  }
  .checkout__name--grid {
    width: 100%;
    display: grid;
    margin-bottom: 3rem;
    gap: 1rem;
    grid-template-columns: 45% 45%;
  }
  .checkout__name--section {
    width: 100%;
  }
  .checkout__label {
    width: 100%;
    line-height: 35px;
    color: #000;
    display: inline-block;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    text-align: start;
  }
  .checkout__name--input {
    width: 100%;
    border: #cfcfcf solid 1px;
    height: 35px;
    border-radius: 5px;
    padding-left: 1rem;
  }
  .checkout__shipping--grid {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 45% 45%;
    margin-bottom: 3rem;
  }
  .checkout__shipping--grid--1 {
    width: 94%;
    margin-bottom: 0.8rem;
  }
  .input__payment {
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    border: solid 1px #cfcfcf;
    margin-bottom: 1rem;
    display: flex;
    padding-left: 1rem;
    justify-content: start;
    cursor: pointer;
  }
  .input__payment--active {
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    border: solid 1px #d87d4a;
    margin-bottom: 1rem;
    display: flex;
    padding-left: 1rem;
    justify-content: start;
    cursor: pointer;
  }
  .input__radio--outlier {
    border: #cfcfcf solid 2px;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-top: 1rem;
  }
  .input__radio--inlier--active {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: #d87d4a;
    margin: 0.1rem auto;
  }
  .input__radio--inlier {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    margin: 0.1rem auto;
  }
  .checkout__name--grid--inactive {
    display: none;
  }
  .cash--display {
    width: 100%;
    display: flex;
    justify-content: start;
    img {
      width: 3rem;
      height: 3rem;
      margin-top: 1rem;
    }
    .cash__display--text {
      width: 80%;
      margin-left: 2rem;
      line-height: 25px;
      font-size: 15px;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.507);
      text-align: start;
    }
  }
  .checkout__final__button {
    width: 100%;
    margin: auto;
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
  .final__section {
    width: 100%;
    height: 300vh;
    background-color: rgba(0, 0, 0, 0.616);
    position: absolute;
    top: 0rem;
  }
  .final__section__disable {
    display: none;
  }
  .final__section--container {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.216);
  }
  .final__section__content {
    min-height: 30rem;
    width: 30rem;
    position: absolute;
    left: 15%;
    top: 6rem;
    background-color: #fff;
    border-radius: 5px;
  }
  .final__modal--header {
    margin: 2rem 0rem 1rem;
    width: 4rem;
    height: 4rem;
    background-color: #d87d4a;
    border-radius: 50%;
    i {
      font-size: 33px;
      margin-top: 1rem;
    }
    clear: both;
  }
  .final__modal--h1 {
    text-align: start;
    font-size: 32px;
    line-height: 36px;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  .final__modal--small {
    text-align: start;
    font-size: 15px;
    line-height: 25px;
    display: flex;
    justify-content: start;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.61);
  }
  .final__modal--content {
    width: 100%;
    height: 10rem;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
  }
  .final__modal__end {
    width: 100%;
    height: 2rem;
  }
  .final__modal--content--1 {
    width: 60%;
    height: 100%;
    background-color: #f1f1f1;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .final__modal--content--2 {
    width: 40%;
    height: 100%;
    background-color: #000;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .final__modal--content--2--h1 {
    font-size: 15px;
    margin-top: 6rem;
    font-weight: normal;
    line-height: 25px;
    text-transform: uppercase;
    text-align: start;
    color: rgba(255, 255, 255, 0.671);
  }
  .final__modal--content--2--h2 {
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    text-transform: uppercase;
    text-align: start;
    color: rgba(255, 255, 255);
  }
  .final__modal--main--content {
    width: 100%;
    min-height: 6rem;
    border-bottom: grey 1px solid;
  }
  .modal__item--identity--modal {
    width: 4rem;
    height: 100%;
    margin-top: 0.5rem;
    h1 {
      font-size: 15px;
      line-height: 25px;
      font-weight: bold;
      text-align: start;
      color: rgba(0, 0, 0);
    }
    h3 {
      font-size: 14px;
      line-height: 25px;
      font-weight: bold;
      text-align: start;
      color: rgba(0, 0, 0, 0.363);
    }
  }
  .final__modal__lengt {
    width: 100%;
    h5 {
      text-align: center;
      line-height: 33px;
      margin-top: 0.5rem;
      font-size: 13px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.842);
    }
  }
  .checkout__summary--bill {
    width: 100%;
    min-height: 4rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 50% 45%;
    margin-top: 1rem;
    h1 {
      text-align: end;
      height: 1rem;
      line-height: 25px;
      font-size: 18px;
      font-weight: bold;
      color: rgba(0, 0, 0);
    }
    h2 {
      text-align: start;
      height: 1rem;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.575);
      font-size: 15px;
      font-weight: normal;
      line-height: 25px;
    }
    h3 {
      text-align: end;
      height: 1rem;
      line-height: 25px;
      font-size: 18px;
      font-weight: bold;
      color: #d87d4a;
      margin-top: 2rem;
    }
    h4 {
      text-align: start;
      height: 1rem;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.575);
      font-size: 15px;
      font-weight: normal;
      line-height: 25px;
      margin-top: 2rem;
    }
  }
}
@media screen and (max-width: 600px) {
  .checkout__main {
    width: 100%;
    margin: auto;
    min-height: 80rem;
    background-color: #f2f2f2;
  }
  .goback__text {
    text-align: start;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.582);
    line-height: 25px;
    text-transform: capitalize;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #d87d4a;
      cursor: pointer;
      color: #d87d4a;
    }
  }
  .checkout__container {
    padding-top: 4rem;
  }
  .checkout__content {
    width: 100%;
    min-height: 30rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 100%;
    margin: 2rem 0rem 0rem;
  }
  .checkout__form {
    width: 100%;
    min-height: 65rem;
    background-color: #fff;
    border-radius: 5px;
    margin-right: 4%;
  }
  .checkout__aside {
    width: 100%;
    min-height: 30rem;
    background-color: #fff;
    border-radius: 5px;
    margin: 2rem 0rem 2rem;
  }
  .checkout__section__name {
    text-align: start;
    color: #d87d4a;
    font-size: 13px;
    line-height: 35px;
    font-weight: bold;
    text-transform: capitalize;
  }
  .checkout__summary {
    width: 90%;
    height: 4rem;
    line-height: 25px;
    font-weight: bold;
    text-transform: uppercase;
    font-weight: 18px;
    margin-top: 1rem;
    text-align: start;
  }
  .checkout__name {
    width: 100%;
    text-align: start;
    margin: 2rem 0rem 2rem;
    text-transform: uppercase;
    font-size: 32px;
    line-height: 36px;
    font-weight: bold;
  }
  .checkout__contain {
    width: 90%;
    min-height: 1rem;
    margin: auto;
  }
  .checkout__contains {
    width: 90%;
    min-height: 10rem;
    margin: auto;
    background-color: #fff;
    border-radius: 5px;
  }
  .checkout__form--section {
    width: 90%;
    margin: auto;
  }
  .checkout__name--div {
    width: 100%;
  }
  .checkout__name--grid {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 100%;
  }
  .checkout__name--grid {
    width: 100%;
    display: grid;
    margin-bottom: 3rem;
    gap: 1rem;
    grid-template-columns: 100%;
  }
  .checkout__name--section {
    width: 100%;
  }
  .checkout__label {
    width: 100%;
    line-height: 35px;
    color: #000;
    display: inline-block;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    text-align: start;
  }
  .checkout__name--input {
    width: 100%;
    border: #cfcfcf solid 1px;
    height: 35px;
    border-radius: 5px;
    padding-left: 1rem;
  }
  .checkout__shipping--grid {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 100%;
    margin-bottom: 3rem;
  }
  .checkout__shipping--grid--1 {
    width: 94%;
    margin-bottom: 0.8rem;
  }
  .input__payment {
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    border: solid 1px #cfcfcf;
    margin-bottom: 1rem;
    display: flex;
    padding-left: 1rem;
    justify-content: start;
    cursor: pointer;
  }
  .input__payment--active {
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    border: solid 1px #d87d4a;
    margin-bottom: 1rem;
    display: flex;
    padding-left: 1rem;
    justify-content: start;
    cursor: pointer;
  }
  .input__radio--outlier {
    border: #cfcfcf solid 2px;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-top: 1rem;
  }
  .input__radio--inlier--active {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: #d87d4a;
    margin: 0.1rem auto;
  }
  .input__radio--inlier {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    margin: 0.1rem auto;
  }
  .checkout__name--grid--inactive {
    display: none;
  }
  .cash--display {
    width: 100%;
    display: flex;
    justify-content: start;
    img {
      width: 3rem;
      height: 3rem;
      margin-top: 1rem;
    }
    .cash__display--text {
      width: 80%;
      margin-left: 2rem;
      line-height: 25px;
      font-size: 15px;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.507);
      text-align: start;
    }
  }
  .checkout__final__button {
    width: 100%;
    margin: auto;
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
  .final__section {
    width: 100%;
    height: 300vh;
    background-color: rgba(0, 0, 0, 0.616);
    position: absolute;
    top: 0rem;
    overflow-y: hidden;
  }
  .final__section__disable {
    display: none;
  }
  .final__section--container {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.216);
  }
  .final__section__content {
    min-height: 30rem;
    width: 90%;
    position: absolute;
    left: 5%;
    top: 6rem;
    background-color: #fff;
    border-radius: 5px;
  }
  .final__modal--header {
    margin: 2rem 0rem 1rem;
    width: 4rem;
    height: 4rem;
    background-color: #d87d4a;
    border-radius: 50%;
    i {
      font-size: 33px;
      margin-top: 1rem;
    }
    clear: both;
  }
  .final__modal--h1 {
    text-align: start;
    font-size: 32px;
    line-height: 36px;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  .final__modal--small {
    text-align: start;
    font-size: 15px;
    line-height: 25px;
    display: flex;
    justify-content: start;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.61);
  }
  .final__modal--content {
    width: 100%;
    min-height: 10rem;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 100%;
  }
  .final__modal__end {
    width: 100%;
    height: 2rem;
  }
  .final__modal--content--1 {
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
    border-bottop-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .final__modal--content--2 {
    width: 100%;
    height: 5rem;
    background-color: #000;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .final__modal--content--2--h1 {
    font-size: 15px;
    margin-top: 2rem;
    font-weight: normal;
    line-height: 25px;
    text-transform: uppercase;
    text-align: start;
    color: rgba(255, 255, 255, 0.671);
  }
  .final__modal--content--2--h2 {
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    text-transform: uppercase;
    text-align: start;
    color: rgba(255, 255, 255);
  }
  .final__modal--main--content {
    width: 100%;
    min-height: 6rem;
    border-bottom: grey 1px solid;
  }
  .modal__item--identity--modal {
    width: 4rem;
    height: 100%;
    margin-top: 0.5rem;
    h1 {
      font-size: 15px;
      line-height: 25px;
      font-weight: bold;
      text-align: start;
      color: rgba(0, 0, 0);
    }
    h3 {
      font-size: 14px;
      line-height: 25px;
      font-weight: bold;
      text-align: start;
      color: rgba(0, 0, 0, 0.363);
    }
  }
  .final__modal__lengt {
    width: 100%;
    h5 {
      text-align: center;
      line-height: 33px;
      margin-top: 0.5rem;
      font-size: 13px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.842);
    }
  }
  .checkout__summary--bill {
    width: 100%;
    min-height: 4rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 50% 45%;
    margin-top: 1rem;
    h1 {
      text-align: end;
      height: 1rem;
      line-height: 25px;
      font-size: 18px;
      font-weight: bold;
      color: rgba(0, 0, 0);
    }
    h2 {
      text-align: start;
      height: 1rem;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.575);
      font-size: 15px;
      font-weight: normal;
      line-height: 25px;
    }
    h3 {
      text-align: end;
      height: 1rem;
      line-height: 25px;
      font-size: 18px;
      font-weight: bold;
      color: #d87d4a;
      margin-top: 2rem;
    }
    h4 {
      text-align: start;
      height: 1rem;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.575);
      font-size: 15px;
      font-weight: normal;
      line-height: 25px;
      margin-top: 2rem;
    }
  }
}
</style>
