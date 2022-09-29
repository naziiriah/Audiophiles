<template>
  <div>
    <router-view />
    <Aside />
    <Footer />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  width: calc(100% - 20%);
  margin: auto;
}
.btn__see__products--brown {
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
</style>

<script>
import Footer from "./components/Footer.vue";
import Aside from "./components/Aside.vue";

export default {
  name: "App",
  components: {
    Footer,
    Aside,
  },
};
</script>
