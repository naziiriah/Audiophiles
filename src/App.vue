<template>
  <div>
    <router-view />
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
@media screen and (min-width: 1100px) {
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
}
@media screen and (max-width: 1100px) and (min-width: 600px) {
  .container {
    width: calc(100% - 10%);
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
}
@media screen and (max-width: 600px) {
  .container {
    width: calc(100% - 10%);
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
}
</style>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>
