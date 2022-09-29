<template>
  <main>
    <header class="home__header">
      <Header />
      <div class="container">
        <div class="home__header__contents">
          <div class="home__header__contents--texts">
            <h4>new products</h4>
            <h1>
              xx99 mark ii <br />
              headphones
            </h1>
            <p>
              Experience natural, lifelike audio and exceptional<br />
              build quality made for the passionate music<br />
              enthusiast.
            </p>
          </div>
          <button class="btn__see__products--brown">see product</button>
        </div>
      </div>
    </header>
    <NavAside />
    <section class="home__section__1">
      <div class="section__1--img">
        <img
          src="../assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt="Prime__speakers__image"
          srcset=""
        />
      </div>
      <div class="section__1--text">
        <h1>
          zx9 <br />
          speaker
        </h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button>see product</button>
      </div>
    </section>
    <section class="home__section__2"></section>
    <section class="home__section__3">
      <div class="section__3--img"></div>
      <div class="section__3--content"></div>
    </section>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import NavAside from "../components/NavAside.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    NavAside,
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 1100px) {
  .home__header {
    background-image: url("../assets/home/desktop/image-hero.jpg");
    height: 37rem;
    background-repeat: no-repeat;
    width: 100%;
    background-size: 100% 100%;
  }
  .home__header__contents {
    width: 100%;
    button {
      float: left;
      margin-top: 1rem;
    }
  }
  .home__header__contents--texts {
    width: 50%;
    margin-top: 6rem;
    margin-bottom: 1rem;
    text-align: start;
    h4 {
      color: rgba(255, 255, 255, 0.3);
      font-size: 14px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 10px;
      word-spacing: 3px;
      line-height: 36px;
    }
    h1 {
      color: #fff;
      font-weight: bold;
      font-size: 56px;
      text-transform: uppercase;
      line-height: 66px;
      letter-spacing: 2px;
      margin-bottom: 1rem;
    }
    p {
      color: rgba(255, 255, 255, 0.729);
      font-size: 15px;
      font-weight: normal;
      line-height: 25px;
    }
  }
  .home__section__1 {
    width: 80%;
    margin: 4rem auto;
    height: 24rem;
    background-color: #d87d4a;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
  }
  .home__section__2 {
    width: 80%;
    margin: 4rem auto;
    height: 18rem;
    background-image: url("../assets/home/desktop/image-speaker-zx7.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 3px;
  }
  .home__section__3 {
    width: 80%;
    margin: 0rem auto 8rem;
    height: 15rem;
    display: flex;
    justify-content: space-between;
    .section__3--img {
      background-image: url("../assets/home/desktop/image-earphones-yx1.jpg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 100%;
      width: 48%;
      border-radius: 3px;
    }
    .section__3--content {
      height: 100%;
      width: 48%;
      border-radius: 3px;
      background-color: #f1f1f1;
    }
  }
}
</style>
