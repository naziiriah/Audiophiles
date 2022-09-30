<template>
  <div>
    <header class="inner__page__header">
      <Header />
      <h1>earphones</h1>
    </header>
    <InnerSection :order="true" :state="File1" />
    <NavAside />
    <Aside />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import InnerSection from "@/components/InnerSection.vue";
import createStore from "../store/index";
import Aside from "@/components/Aside.vue";
import NavAside from "@/components/NavAside.vue";
const Store = createStore.state.Data;
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Earphone",
  components: { Header, InnerSection, Aside, NavAside },
  setup() {
    const EarphoneFile = Store.filter(
      (state) => state.category === "earphones"
    );
    const File1 = EarphoneFile[0];

    return {
      File1,
    };
  },
};
</script>

<style lang="scss"></style>
