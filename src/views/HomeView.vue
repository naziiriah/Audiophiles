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
          <button
            @click="toLink('/product/xx99-mark-two-headphones')"
            class="btn__see__products--brown"
          >
            see product
          </button>
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
        <button @click="toLink('/product/zx9-speaker')">see product</button>
      </div>
    </section>
    <section class="home__section__2">
      <div class="home__section__2--text">
        <h2>zx7 speaker</h2>
        <button @click="toLink('/product/zx7-speaker')">see product</button>
      </div>
    </section>
    <section class="home__section__3">
      <div class="section__3--img"></div>
      <div class="section__3--content">
        <h2>yx1 earphones</h2>
        <button @click="toLink('/product/yx1-earphones')">see product</button>
      </div>
    </section>
    <Aside />
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import NavAside from "../components/NavAside.vue";
import Aside from "@/components/Aside.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    NavAside,
    Aside,
  },
  methods: {
    toLink(url) {
      this.$router.push(url);
    },
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
  .section__1--text {
    width: 100%;
    text-align: center;
    margin: 4rem auto 0rem;
    h1 {
      font-size: 36px;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      line-height: 42px;
    }
    p {
      font-size: 15px;
      color: #fff;
      font-weight: normal;
      line-height: 25px;
      width: 80%;
      margin: 1rem auto;
    }
    button {
      margin-top: 2rem;
      padding: 0rem 1rem;
      height: 3rem;
      color: #fff;
      background-color: #000;
      border: solid 2px transparent;
      border-radius: 3px;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 2px;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
      }
    }
  }
  .home__section__2 {
    width: 80%;
    margin: 4rem auto;
    height: 18rem;
    background-image: url("../assets/home/desktop/image-speaker-zx7.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 3px;
    div {
      width: 50%;
      h2 {
        width: 75%;
        margin: auto;
        font-size: 28px;
        color: #000;
        text-transform: uppercase;
        font-weight: bold;
        line-height: 42px;
        text-align: center;
      }

      padding-top: 4rem;
      button {
        margin-top: 2rem;
        padding: 0rem 1rem;
        height: 3rem;
        color: #000;
        background-color: rgba(0, 0, 0, 0);
        border: solid 2px #000;
        border-radius: 3px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 2px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0);
          color: #fff;
        }
      }
    }
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
      display: grid;
      grid-template-columns: 100%;
      gap: 0rem;
      h2 {
        text-align: start;
        width: 80%;
        margin: 3rem auto -2rem;
        color: #000;
        font-size: 28px;
        text-transform: uppercase;
        font-weight: bold;
        line-height: 42px;
      }
      button {
        margin-left: 4rem;
        padding: 0rem 1rem;
        width: 10rem;
        height: 3rem;
        color: #000;
        background-color: rgba(0, 0, 0, 0);
        border: solid 2px #000;
        border-radius: 3px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 2px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0);
          color: #fff;
        }
      }
    }
  }
}
@media screen and (min-width: 600px) and (max-width: 1100px) {
  .home__header {
    background-image: url("../assets/home/tablet/image-header.jpg");
    height: 45rem;
    background-repeat: no-repeat;
    width: 100%;
    background-size: 100% 100%;
  }
  .home__header__contents {
    width: 100%;
    button {
      float: center;
      margin-top: 1rem;
    }
  }
  .home__header__contents--texts {
    width: 100%;
    margin-top: 12rem;
    margin-bottom: 1rem;
    text-align: center;
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
    width: 90%;
    margin: 4rem auto;
    min-height: 40rem;
    background-image: url("../assets/home/tablet/Group\ 8.png");
    background-size: 100% 100%;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 100%;
  }
  .section__1--text {
    width: 100%;
    text-align: center;
    margin: -10rem auto 0rem;
    h1 {
      font-size: 36px;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      line-height: 42px;
      margin: 1rem 0rem;
    }
    p {
      font-size: 15px;
      width: 60%;
      margin: auto;
      color: #fff;
      font-weight: normal;
      line-height: 25px;
    }
    button {
      margin-top: 2rem;
      padding: 0rem 1rem;
      height: 3rem;
      color: #fff;
      background-color: #000;
      border: solid 2px transparent;
      border-radius: 3px;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 2px;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
      }
    }
  }
  .home__section__2 {
    width: 90%;
    margin: 4rem auto;
    height: 18rem;
    background-image: url("../assets/home/desktop/image-speaker-zx7.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 3px;
    div {
      width: 60%;
      h2 {
        width: 75%;
        margin: auto;
        font-size: 28px;
        color: #000;
        text-transform: uppercase;
        font-weight: bold;
        line-height: 42px;
        text-align: center;
      }

      padding-top: 4rem;
      button {
        margin-top: 2rem;
        padding: 0rem 1rem;
        height: 3rem;
        color: #000;
        background-color: rgba(0, 0, 0, 0);
        border: solid 2px #000;
        border-radius: 3px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 2px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
  .home__section__3 {
    width: 90%;
    margin: 0rem auto 8rem;
    height: 15rem;
    display: flex;
    justify-content: space-between;
    .section__3--img {
      background-image: url("../assets/home/desktop/image-earphones-yx1.jpg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 100%;
      width: 49%;
      border-radius: 3px;
    }
    .section__3--content {
      height: 100%;
      width: 49%;
      border-radius: 3px;
      background-color: #f1f1f1;
      h2 {
        width: 75%;
        margin: 4rem auto 1rem;
        font-size: 28px;
        color: #000;
        text-transform: uppercase;
        font-weight: bold;
        line-height: 42px;
        text-align: center;
      }
      button {
        padding: 0rem 1rem;
        height: 3rem;
        color: #000;
        background-color: rgba(0, 0, 0, 0);
        border: solid 2px #000;
        border-radius: 3px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 2px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .home__header {
    background-image: url("../assets/home/mobile/image-header.jpg");
    height: 30rem;
    background-repeat: no-repeat;
    width: 100%;
    background-size: 100% 100%;
  }
  .home__header__contents {
    width: 100%;
    button {
      float: center;
      margin-top: 1rem;
    }
  }
  .home__header__contents--texts {
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 1rem;
    text-align: center;
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
      font-size: 36px;
      text-transform: uppercase;
      line-height: 40px;
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
    width: 90%;
    margin: 4rem auto;
    height: 42rem;
    background-color: #d87d4a;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 100%;
  }
  .section__1--img {
    width: 100%;
    margin-top: 4rem;
    img {
      width: 100%;
    }
  }
  .section__1--text {
    width: 100%;
    text-align: center;
    margin: -4rem auto 0rem;
    h1 {
      font-size: 36px;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      line-height: 42px;
    }
    p {
      font-size: 15px;
      color: #fff;
      font-weight: normal;
      line-height: 25px;
    }
    button {
      margin-top: 2rem;
      padding: 0rem 1rem;
      height: 3rem;
      color: #fff;
      background-color: #000;
      border: solid 2px transparent;
      border-radius: 3px;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 2px;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
      }
    }
  }
  .home__section__2 {
    width: 90%;
    margin: 4rem auto;
    height: 18rem;
    background-image: url("../assets/home/mobile/image-speaker-zx7.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 3px;
    div {
      width: 90%;
      h2 {
        width: 75%;
        margin: auto;
        font-size: 28px;
        color: #000;
        text-transform: uppercase;
        font-weight: bold;
        line-height: 42px;
        text-align: start;
      }

      padding-top: 4rem;
      button {
        margin-left: -5rem;
        margin-top: 2rem;
        padding: 0rem 1rem;
        height: 3rem;
        color: #000;
        background-color: rgba(0, 0, 0, 0);
        border: solid 2px #000;
        border-radius: 3px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 2px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
  .home__section__3 {
    width: 90%;
    margin: 0rem auto 4rem;
    min-height: 15rem;
    display: grid;
    grid-template-columns: 100%;
    gap: 1.5rem;

    .section__3--img {
      background-image: url("../assets/home/mobile/image-earphones-yx1.jpg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 10rem;
      width: 100%;
      border-radius: 3px;
    }
    .section__3--content {
      height: 10rem;
      width: 100%;
      border-radius: 3px;
      background-color: #f1f1f1;
      h2 {
        text-align: start;
        width: 80%;
        margin: 2rem auto 1rem;
        color: #000;
        font-size: 28px;
        text-transform: uppercase;
        font-weight: bold;
        line-height: 42px;
      }
      button {
        margin-left: -7rem;
        padding: 0rem 1rem;
        height: 3rem;
        color: #000;
        background-color: rgba(0, 0, 0, 0);
        border: solid 2px #000;
        border-radius: 3px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 2px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
}
</style>
