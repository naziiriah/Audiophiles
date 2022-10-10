<template>
  <div>
    <header class="inner__page__header">
      <Header />
      <h1>Headphones</h1>
    </header>
    <InnerSection :order="true" :state="File1" />
    <InnerSection :order="false" :state="File2" />
    <InnerSection :order="true" :state="File3" />
    <NavAside />
    <Aside />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NavAside from "@/components/NavAside.vue";
import InnerSection from "@/components/InnerSection.vue";
import createStore from "../store/index";
import Aside from "@/components/Aside.vue";

const Store = createStore.state.Data;
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Headphone",
  components: { Header, NavAside, InnerSection, Aside },
  setup() {
    const HeadphoneFile = Store.filter(
      (state) => state.category === "headphones"
    );
    const File1 = HeadphoneFile[2];
    const File2 = HeadphoneFile[1];
    const File3 = HeadphoneFile[0];

    return {
      File1,
      File2,
      File3,
    };
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0px;
  box-sizing: border-box;
}
@media screen and (min-width: 1100px) {
  .inner__page__header {
    height: 15rem;
    width: 100%;
    background-color: #000;
    h1 {
      text-transform: uppercase;
      text-align: center;
      color: #fff;
      font-size: 40px;
      font-weight: bold;
      line-height: 44px;
      margin-top: 4rem;
      padding: 0px 1.43px;
    }
  }
}
@media screen and (max-width: 1100px) and (min-width: 600px) {
  .inner__page__header {
    height: 15rem;
    width: 100%;
    background-color: #000;
    h1 {
      text-transform: uppercase;
      text-align: center;
      color: #fff;
      font-size: 40px;
      font-weight: bold;
      line-height: 44px;
      margin-top: 4rem;
      padding: 0px 1.43px;
    }
  }
}
@media screen and (max-width: 600px) {
  .inner__page__header {
    height: 10rem;
    width: 100%;
    background-color: #000;
    h1 {
      text-transform: uppercase;
      text-align: center;
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      line-height: 34px;
      margin-top: 1rem;
      padding: 0px 1.43px;
    }
  }
}
</style>
