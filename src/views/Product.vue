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
            <div class="product__update__value" @click="minusValue()">
              <button class="product__update__value--add">
                <i class="fa-solid fa-minus"></i>
              </button>
              <div class="product__update__value--content">{{ value }}</div>
              <button class="product__update__value--add" @click="addValue()">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <button
              class="btn__see__products--brown"
              @click="toLink('/checkout')"
            >
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
          <div
            class="product__list"
            v-for="include in state.includes"
            :key="include.item"
          >
            <h1 class="product__section--h1">{{ include.quantity }} x</h1>
            <p class="product__section--p">{{ include.item }}</p>
          </div>
        </div>
      </section>
      <section class="product__section--3">
        <div class="product_gallery--phase--1">
          <img class="product__gallery--image" alt="gallery.jpg" />
          <img class="product__gallery--image" alt="gallery.jpg" />
        </div>
        <div class="product_gallery--phase--2">
          <img :src="gallery.third" @click="checkImage" alt="gallery.jpg" />
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
      value,
    };
  },
  methods: {
    addValue() {
      value.value = 10;
      alert(value.value);
    },
    minusValue() {
      if (value.value > 1) {
        value.value = value.value - 1;
      }
    },
    toLink(url) {
      this.$router.push(url);
      setTimeout(() => {
        this.$router.go();
      }, 400);
    },
    goBack() {
      this.$router.go(-1);
    },
    checkImage() {
      console.log(this.state.gallery.third);
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
    font-size: 15px;
    line-height: 25px;
    color: #d87d4a;
    margin-right: 1rem;
    font-weight: bold;
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
</style>
