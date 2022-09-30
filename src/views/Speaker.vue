<template>
  <div>
    <header class="inner__page__header">
      <Header />
      <h1>speakers</h1>
    </header>
    <InnerSection :order="true" :state="File1" />
    <InnerSection :order="false" :state="File2" />
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
  name: "Speaker",
  components: { Header, InnerSection, Aside, NavAside },
  setup() {
    const Speaker = Store.filter((state) => state.category === "speakers");
    const File1 = Speaker[1];
    const File2 = Speaker[0];

    return {
      File1,
      File2,
    };
  },
};
</script>

<style lang="scss"></style>
