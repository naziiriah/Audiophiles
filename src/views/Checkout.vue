<template>
  <div>
    <header class="product__header"><Header /></header>
    <main class="checkout__main">
      <section class="container checkout__container">
        <h2 class="goback__text" @click="goBack">go back</h2>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Checkout",
  components: { Header },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss">
@media screen and (min-width: 1100px) {
  .checkout__main {
    width: 100%;
    margin: auto;
    min-height: 50rem;
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
}
</style>
