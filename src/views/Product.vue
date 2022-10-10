<template>
  <div>
    <header class="product__header">
      <Header />
    </header>
    <main class="product__main">
      <div class="container checkout__container">
        <h2 class="goback__text" @click="goBack">go back</h2>
      </div>
      <section class="product__section">
        <div class="product___image">
          <img :src="state.image.desktop" :alt="state.slug" />
        </div>
        <div class="product___content">
          <h4 :class="state.new ? 'product__new--true' : 'product__new--false'">
            new product
          </h4>
          <h1 class="product__name">{{ state.name }}</h1>
          <p class="product__description">{{ state.description }}</p>
          <h2 class="product__price">
            &dollar; {{ state.price.toLocaleString("en-US") }}
          </h2>
          <div class="product__buttons">
            <div class="product__update__value">
              <button class="product__update__value--add" @click="minusValue">
                <i class="fa-solid fa-minus"></i>
              </button>
              <div class="product__update__value--content">{{ value }}</div>
              <button class="product__update__value--add" @click="addValue">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <button class="btn__see__products--brown" @click="AddtoCart">
              add to cart
            </button>
          </div>
        </div>
      </section>
      <section class="product__section--2">
        <div class="product__feature">
          <h2 class="product__section--h2">features</h2>
          <p class="product__section--p">{{ state.features }}</p>
        </div>
        <div class="product__lists">
          <h2 class="product__section--h2">in the box</h2>
          <div class="product__listsss">
            <div
              class="product__list"
              v-for="include in state.includes"
              :key="include.item"
            >
              <h1 class="product__section--h1">{{ include.quantity }} x</h1>
              <h3 class="">{{ include.item }}</h3>
            </div>
          </div>
        </div>
      </section>
      <section class="product__section--4">
        <h1 class="product__section__4--title">you may also like</h1>
        <div class="product__section__4--contents">
          <div
            class="product__section__4--content"
            v-for="stat in state.others"
            :key="stat.name"
          >
            <img
              class="product__section__4--image"
              :alt="stat.name"
              :src="stat.image.desktop"
              srcset=""
            />
            <h3 class="product__section__4--name">{{ stat.name }}</h3>
            <button
              class="btn__see__products--brown"
              @click="toLink(`/product/${stat.slug}`)"
            >
              see product
            </button>
          </div>
        </div>
      </section>
      <NavAside />
    </main>
    <Aside />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { useRoute } from "vue-router";
import createStore from "../store/index";
import { ref } from "vue";
import NavAside from "@/components/NavAside.vue";
import Aside from "@/components/Aside.vue";
let value = ref(1);
export default {
  // eslint-disable-next-line no-undef
  name: "ProductFile",
  components: {
    Header,
    NavAside,
    Aside,
  },
  setup() {
    const route = useRoute();
    const currentslug = route.params.slug;
    const state = createStore.state.Data.find(
      (state) => state.slug === currentslug
    );
    return {
      state,
      gallery: state.gallery,
    };
  },
  data() {
    return { value };
  },
  methods: {
    addValue() {
      value.value = value.value + 1;
    },
    minusValue() {
      if (value.value >= 2) {
        value.value = value.value - 1;
      }
    },
    toLink(url) {
      this.$router.go(-1);
      value.value = 1;
      setTimeout(() => {
        this.$router.push(url);
      }, 10);
    },
    goBack() {
      this.$router.go(-1);
    },
    AddtoCart() {
      const props = {
        ...this.state,
        value: value.value,
      };
      createStore.dispatch("addToCart", props);
    },
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 1100px) {
  .product__header {
    width: 100%;
    height: 4.98rem;
    background-color: #000;
  }
  .product__section {
    width: 80%;
    height: 30rem;
    margin: 4rem auto 6rem;
    display: flex;
    justify-content: space-between;
  }
  .product__section--reverse {
    width: 80%;
    height: 30rem;
    margin: 8rem auto;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
  .product___image {
    width: 47%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  .product___content {
    width: 47%;
    height: 90%;
    margin: 5% 0rem;
    text-align: start;
  }
  .product__new--true {
    color: #d87e4ad3;
    letter-spacing: 2px;
    font-size: 14px;
    line-height: 45px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .product__new--false {
    display: none;
  }
  .product__name {
    line-height: 44px;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1.43px;
    width: 70%;
    color: #000;
    margin-bottom: 2rem;
  }
  .product__description {
    color: rgba(0, 0, 0, 0.678);
    font-size: 15px;
    line-height: 25px;
    width: 90%;
    margin-bottom: 3rem;
  }
  .product__description {
    color: rgba(0, 0, 0, 0.678);
    font-size: 15px;
    line-height: 25px;
    width: 90%;
    margin-bottom: 1rem;
  }
  .product__buttons {
    display: flex;
    width: 100%;
    margin: 2rem 0rem 0rem;
  }
  .product__update__value {
    width: 8rem;
    height: 3rem;
    margin-right: 3rem;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-between;
  }
  .product__update__value--content {
    align-self: center;
  }
  .product__update__value--add {
    width: 33%;
    height: 100%;
    color: #000;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    border: none;
    i {
      color: rgba(0, 0, 0, 0.671);
    }
    &:hover {
      i {
        color: #d87d4a;
      }
    }
  }
  .product__section--2 {
    width: 80%;
    margin: 1rem auto 3rem;
    display: flex;
    justify-content: space-between;
    min-height: 20rem;
  }
  .product__section--3 {
    width: 80%;
    margin: 1rem auto 3rem;
    display: flex;
    justify-content: space-between;
    height: 30rem;
  }
  .product__section--4 {
    width: 80%;
    margin: 7rem auto 2rem;
    min-height: 36rem;
  }
  .product__feature {
    width: 46%;
    text-align: start;
  }
  .product__lists {
    width: 45%;
    text-align: start;
  }
  .product__list {
    display: flex;
    justify-content: start;
    margin: 1rem 0rem;
    h1 {
      font-size: 15px;
      line-height: 25px;
      color: #d87d4a;
      margin-right: 1rem;
      font-weight: bold;
    }
    h3 {
      font-size: 15px;
      line-height: 25px;
      color: rgba(0, 0, 0, 0.555);
    }
  }
  .product__section--h2 {
    font-size: 32px;
    font-weight: bold;
    line-height: 36px;
    padding: 1.14px;
    color: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }
  .product__section--p {
    font-size: 15px;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.555);
  }
  .product__section--h1 {
  }
  .product_gallery--phase--1 {
    width: 42%;
    height: 100%;
    background-color: blue;
  }
  .product_gallery--phase--2 {
    width: 55%;
    height: 100%;
    background-color: red;
    border-radius: 5px;
  }
  .product__gallery--image {
    background-color: red;
    border-radius: 5px;
    width: 100%;
    height: 4rem;
  }
  .product__section__4--title {
    width: 100%;
    height: 2rem;
    text-transform: uppercase;
    font-size: 32px;
    line-height: 36px;
    padding: 1.14px;
    font-weight: bold;
    color: #000;
  }
  .product__section__4--contents {
    width: 100%;
    height: 22rem;
    margin: 3rem 0rem;
    display: flex;
    justify-content: space-between;
  }
  .product__section__4--content {
    width: 30%;
    height: 100%;
  }
  .product__section__4--image {
    width: 100%;
  }
  .product__section__4--name {
    color: #000;
    margin: 2rem auto 2.5rem;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    padding: 1.71px;
    text-align: center;
  }
}
@media screen and (max-width: 1100px) and (min-width: 600px) {
  .product__header {
    width: 100%;
    height: 4.98rem;
    background-color: #000;
  }
  .product__section {
    width: 90%;
    height: 30rem;
    margin: 4rem auto 6rem;
    display: flex;
    justify-content: space-between;
  }
  .product___image {
    width: 47%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  .product___content {
    width: 47%;
    height: 90%;
    margin: -1% 0rem;
    text-align: start;
  }
  .product__new--true {
    color: #d87e4ad3;
    letter-spacing: 2px;
    font-size: 14px;
    line-height: 45px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .product__new--false {
    display: none;
  }
  .product__name {
    line-height: 44px;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1.43px;
    width: 70%;
    color: #000;
    margin-bottom: 2rem;
  }
  .product__description {
    color: rgba(0, 0, 0, 0.678);
    font-size: 15px;
    line-height: 25px;
    width: 90%;
    margin-bottom: 3rem;
  }
  .product__description {
    color: rgba(0, 0, 0, 0.678);
    font-size: 15px;
    line-height: 25px;
    width: 90%;
    margin-bottom: 1rem;
  }
  .product__buttons {
    display: flex;
    width: 100%;
    margin: 2rem 0rem 0rem;
  }
  .product__update__value {
    width: 8rem;
    height: 3rem;
    margin-right: 3rem;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-between;
  }
  .product__update__value--content {
    align-self: center;
  }
  .product__update__value--add {
    width: 33%;
    height: 100%;
    color: #000;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    border: none;
    i {
      color: rgba(0, 0, 0, 0.671);
    }
    &:hover {
      i {
        color: #d87d4a;
      }
    }
  }
  .product__section--2 {
    width: 90%;
    margin: 1rem auto 3rem;
    display: grid;
    grid-template-columns: 100%;
    min-height: 20rem;
  }
  .product__section--3 {
    width: 90%;
    margin: 1rem auto 3rem;
    display: flex;
    justify-content: space-between;
    height: 30rem;
  }
  .product__section--4 {
    width: 90%;
    margin: 7rem auto 2rem;
    min-height: 36rem;
  }
  .product__feature {
    width: 100%;
    text-align: start;
    min-height: 4rem;
    margin-bottom: 3rem;
  }
  .product__listsss {
    width: 50%;
    min-height: 5rem;
  }
  .product__lists {
    width: 100%;
    display: flex;
    justify-content: space-between;
    min-height: 4rem;
    div {
      width: 50%;
    }
    h2 {
      width: 50%;
    }
  }
  .product__list {
    display: flex;
    justify-content: start;
    margin: 1rem 0rem;
    width: 100%;
    h1 {
      font-size: 15px;
      line-height: 25px;
      color: #d87d4a;
      margin-right: 1rem;
      font-weight: bold;
      width: 20%;
    }
    h3 {
      font-size: 15px;
      line-height: 25px;
      color: rgba(0, 0, 0, 0.555);
      width: 70%;
      text-align: start;
    }
  }
  .product__section--h2 {
    font-size: 32px;
    font-weight: bold;
    line-height: 36px;
    padding: 1.14px;
    color: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    letter-spacing: 2px;
    width: 50%;
  }
  .product__section--p {
    font-size: 15px;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.555);
    width: 100%;
  }
  .product__section--h1 {
  }
  .product_gallery--phase--1 {
    width: 42%;
    height: 100%;
    background-color: blue;
  }
  .product_gallery--phase--2 {
    width: 55%;
    height: 100%;
    background-color: red;
    border-radius: 5px;
  }
  .product__gallery--image {
    background-color: red;
    border-radius: 5px;
    width: 100%;
    height: 4rem;
  }
  .product__section__4--title {
    width: 100%;
    height: 2rem;
    text-transform: uppercase;
    font-size: 32px;
    line-height: 36px;
    padding: 1.14px;
    font-weight: bold;
    color: #000;
  }
  .product__section__4--contents {
    width: 100%;
    height: 22rem;
    margin: 3rem 0rem;
    display: flex;
    justify-content: space-between;
  }
  .product__section__4--content {
    width: 32%;
    height: 100%;
  }
  .product__section__4--image {
    width: 100%;
    height: 100%;
  }
  .product__section__4--name {
    color: #000;
    margin: 2rem auto 2.5rem;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    padding: 1.71px;
    text-align: center;
  }
}
@media screen and (max-width: 600px) {
  .product__header {
    width: 100%;
    height: 4.98rem;
    background-color: #000;
  }
  .product__section {
    width: 90%;
    min-height: 30rem;
    margin: 4rem auto 6rem;
    display: grid;
    grid-template-columns: 100%;
  }
  .product___image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  .product___content {
    width: 100%;
    height: 100%;
    margin: 3% 0rem;
    text-align: center;
  }
  .product__new--true {
    color: #d87e4ad3;
    letter-spacing: 2px;
    font-size: 14px;
    line-height: 45px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .product__new--false {
    display: none;
  }
  .product__name {
    line-height: 44px;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1.43px;
    width: 100%;
    color: #000;
    margin-bottom: 2rem;
  }
  .product__description {
    color: rgba(0, 0, 0, 0.678);
    font-size: 15px;
    line-height: 25px;
    width: 90%;
    margin-bottom: 3rem;
  }
  .product__description {
    color: rgba(0, 0, 0, 0.678);
    font-size: 15px;
    line-height: 25px;
    width: 90%;
    margin-bottom: 1rem;
  }
  .product__buttons {
    display: flex;
    width: 100%;
    margin: 2rem 0rem 0rem;
  }
  .product__update__value {
    width: 8rem;
    height: 3rem;
    margin-right: 3rem;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-between;
  }
  .product__update__value--content {
    align-self: center;
  }
  .product__update__value--add {
    width: 33%;
    height: 100%;
    color: #000;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    border: none;
    i {
      color: rgba(0, 0, 0, 0.671);
    }
    &:hover {
      i {
        color: #d87d4a;
      }
    }
  }
  .product__section--2 {
    width: 90%;
    margin: 1rem auto 3rem;
    display: grid;
    grid-template-columns: 100%;
    min-height: 20rem;
  }
  .product__section--3 {
    width: 90%;
    margin: 1rem auto 3rem;
    display: flex;
    justify-content: space-between;
    height: 30rem;
  }
  .product__section--4 {
    width: 90%;
    margin: 2rem auto 2rem;
    min-height: 36rem;
  }
  .product__feature {
    width: 100%;
    text-align: start;
    min-height: 4rem;
    margin-bottom: 3rem;
  }
  .product__listsss {
    width: 50%;
    min-height: 5rem;
  }
  .product__lists {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    min-height: 4rem;
    div {
      width: 100%;
    }
    h2 {
      width: 100%;
    }
  }
  .product__list {
    display: flex;
    justify-content: start;
    margin: 1rem 0rem;
    width: 80%;
    margin: auto;
    h1 {
      font-size: 15px;
      line-height: 25px;
      color: #d87d4a;
      margin-right: 1rem;
      font-weight: bold;
      width: 20%;
    }
    h3 {
      font-size: 15px;
      line-height: 25px;
      color: rgba(0, 0, 0, 0.555);
      width: 70%;
      text-align: start;
    }
  }
  .product__section--h2 {
    font-size: 32px;
    font-weight: bold;
    line-height: 36px;
    padding: 1.14px;
    color: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    letter-spacing: 2px;
    width: 50%;
    text-align: center;
    width: 100%;
  }
  .product__section--p {
    font-size: 15px;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.555);
    width: 100%;
  }
  .product__section--h1 {
  }
  .product_gallery--phase--1 {
    width: 42%;
    height: 100%;
    background-color: blue;
  }
  .product_gallery--phase--2 {
    width: 55%;
    height: 100%;
    background-color: red;
    border-radius: 5px;
  }
  .product__gallery--image {
    background-color: red;
    border-radius: 5px;
    width: 100%;
    height: 4rem;
  }
  .product__section__4--title {
    width: 100%;
    height: 2rem;
    text-transform: uppercase;
    font-size: 32px;
    line-height: 36px;
    padding: 1.14px;
    font-weight: bold;
    color: #000;
  }
  .product__section__4--contents {
    width: 100%;
    min-height: 22rem;
    margin: 2rem 0rem;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;
  }
  .product__section__4--content {
    width: 100%;
    height: 100%;
  }
  .product__section__4--image {
    width: 70%;
  }
  .product__section__4--name {
    color: #000;
    margin: 1rem auto 0.5rem;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    padding: 1.71px;
    text-align: center;
  }
}
</style>
