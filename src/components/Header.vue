<template>
  <nav class="main__header">
    <div class="container">
      <div class="header__contents">
        <h2 class="header__title">audiophile</h2>
        <ul class="header__lists">
          <router-link class="header__list" to="/">home</router-link>
          <router-link class="header__list" to="/headphone"
            >headphones</router-link
          >
          <router-link class="header__list" to="/speaker">speakers</router-link>
          <router-link class="header__list" to="/earphone"
            >earphones</router-link
          >
        </ul>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
};
</script>

<style lang="scss">
@media screen and (min-width: 1100px) {
  .main__header {
    width: 100%;
    height: 5em;
  }
  .header__contents {
    width: 100%;
    height: 5rem;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #979797;
  }
  .header__title {
    font-size: 19px;
    font-weight: 600;
    font-family: mantrope;
    text-align: start;
    color: #fff;
  }
  .header__lists {
    display: flex;
    list-style: none;
    .header__list {
      text-decoration: none;
      margin: 0rem 1rem;
      text-transform: capitalize;
      font-size: 13px;
      font-weight: bold;
      padding: 0px 2px;
      color: #fff;
      line-height: 25px;
    }
    .header__list:hover {
      color: #d87d4a;
      cursor: pointer;
    }
  }
  i {
    color: #fff;
    margin-top: 0.3rem;
    cursor: pointer;
  }
  i:hover {
    color: #d87d4a;
    cursor: pointer;
  }
}
</style>
