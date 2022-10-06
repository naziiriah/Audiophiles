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
            <form>
              <div class="checkout__name--div">
                <h2 class="checkout__section__name">billing details</h2>
                <div class="checkout__name--section">
                  <label for="name" class="checkout__label">name</label>
                  <input
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
                    type="email"
                    name="email"
                    id=""
                    placeholder="anderew@gmail.com"
                  />
                </div>
                <div class="checkout__name--section">
                  <label for="name" class="checkout__label">phone number</label>
                  <input
                    type="number"
                    name="name"
                    id=""
                    placeholder="+1 234-555-0123"
                  />
                </div>
              </div>
            </form>
          </section>
          <aside class="checkout__aside">
            <div class="checkout__contain">
              <h2 class="checkout__summary">summary</h2>
            </div>
          </aside>
        </div>
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
  .checkout__content {
    width: 100%;
    height: 30rem;
    display: flex;
    justify-content: start;
    margin: 2rem 0rem 0rem;
  }
  .checkout__form {
    width: 55%;
    height: 40rem;
    background-color: #fff;
    border-radius: 5px;
    margin-right: 4%;
  }
  .checkout__aside {
    width: 30%;
    height: 20rem;
    background-color: #fff;
    border-radius: 5px;
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
    margin: auto;
  }
}
</style>
