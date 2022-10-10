<template>
  <footer class="main__footer">
    <div class="container">
      <nav class="footer__head">
        <h3 class="footer__title">audiophile</h3>
        <ul class="footer__lists">
          <router-link class="footer__list" to="/">home</router-link>
          <router-link class="footer__list" to="/headphone"
            >headphones</router-link
          >
          <router-link class="footer__list" to="/speaker">speakers</router-link>
          <router-link class="footer__list" to="/earphone"
            >earphones</router-link
          >
        </ul>
      </nav>
      <p class="footer__description">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div class="footer__icons">
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
      <h3 class="footer__end">Copyright 2021. All Rights Reserved</h3>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Earphone",
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0px;
  box-sizing: border-box;
}
@media screen and (min-width: 1100px) {
  .main__footer {
    width: 100%;
    background-color: #101010;
    height: 25rem;
    color: #fff;
    padding: 0rem;
  }
  .footer__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    margin-top: 0rem;
    width: 100%;
    padding: 0rem;
  }
  .footer__title {
    font-size: 19px;
    font-weight: 600;
    font-family: mantrope;
    padding-top: 6rem;
    border-top: solid 4px #d87d4a;
    text-align: start;
  }
  .footer__lists {
    display: flex;
    list-style: none;
    margin-top: 6rem;
    .footer__list {
      text-decoration: none;
      margin: 0rem 1rem;
      text-transform: capitalize;
      font-size: 13px;
      font-weight: bold;
      padding: 0px 2px;
      color: #fff;
    }
    .footer__list:hover {
      color: #d87d4a;
      cursor: pointer;
    }
  }
  .footer__description {
    width: 50%;
    font-size: 15px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.507);
    text-align: start;
  }
  .footer__icons {
    display: flex;
    justify-content: flex-end;
    i {
      color: #fff;
      font-size: 16px;
      margin: 0px 0.6rem;
    }
    i:hover {
      cursor: pointer;
      color: #d87d4a;
    }
  }
  .footer__end {
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.507);
    text-align: start;
    margin-top: 5rem;
  }
}
@media screen and (max-width: 1100px) and (min-width: 600px) {
  .main__footer {
    width: 100%;
    background-color: #101010;
    height: 25rem;
    color: #fff;
    padding: 0rem;
  }
  .footer__head {
    margin-bottom: 3rem;
    margin-top: 0rem;
    width: 100%;
    padding: 0rem;
  }
  .footer__title {
    font-size: 19px;
    font-weight: 600;
    font-family: mantrope;
    padding-top: 4rem;
    border-top: solid 4px #d87d4a;
    text-align: start;
    width: 5.5rem;
  }
  .footer__lists {
    display: flex;
    width: 100%;
    list-style: none;
    margin-top: 3rem;
    .footer__list {
      text-decoration: none;
      margin: 0rem 1rem 0rem 0rem;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: bold;
      padding: 0px 0px;
      color: #fff;
      text-align: start;
    }
    .footer__list:hover {
      color: #d87d4a;
      cursor: pointer;
    }
  }
  .footer__description {
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.507);
    text-align: start;
  }
  .footer__icons {
    display: flex;
    justify-content: flex-end;
    margin: 5rem 0rem 0rem 0rem;
    i {
      color: #fff;
      font-size: 16px;
      margin: 0px 0.6rem;
    }
    i:hover {
      cursor: pointer;
      color: #d87d4a;
    }
  }
  .footer__end {
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.507);
    text-align: start;
  }
}
@media screen and (max-width: 600px) {
  .main__footer {
    width: 100%;
    background-color: #101010;
    min-height: 35rem;
    color: #fff;
    padding: 0rem;
  }
  .footer__head {
    margin-bottom: 3rem;
    margin-top: 0rem;
    width: 100%;
    padding: 0rem;
  }
  .footer__title {
    font-size: 19px;
    font-weight: 600;
    font-family: mantrope;
    padding-top: 4rem;
    border-top: solid 4px #d87d4a;
    text-align: center;
    width: 5.5rem;
    float: center;
    margin: auto;
  }
  .footer__lists {
    display: grid;
    grid-template-columns: 100%;
    gap: 1rem;
    width: 100%;
    list-style: none;
    margin-top: 2rem;
    .footer__list {
      text-decoration: none;
      margin: 0rem 0rem 0rem 0rem;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: bold;
      padding: 0px 0px;
      color: #fff;
      text-align: center;
    }
    .footer__list:hover {
      color: #d87d4a;
      cursor: pointer;
    }
  }
  .footer__description {
    width: 90%;
    font-size: 15px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.507);
    text-align: center;
    line-height: 20px;
    margin: auto;
  }
  .footer__icons {
    display: flex;
    justify-content: center;
    top: 7rem;
    position: relative;
    i {
      color: #fff;
      font-size: 16px;
      margin: 0px 0.6rem;
    }
    i:hover {
      cursor: pointer;
      color: #d87d4a;
    }
  }
  .footer__end {
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.507);
    text-align: center;
    margin-top: 3rem;
  }
}
</style>
