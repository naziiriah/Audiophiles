<template>
  <aside class="main__aside">
    <div class="container">
      <div class="aside__content">
        <div class="aside__paragragh">
          <h3>
            bringing you the <br />
            <span> best </span>audio gear
          </h3>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div class="aside__image"></div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Aside",
};
</script>

<style lang="scss">
@media screen and (min-width: 1100px) {
  .main__aside {
    width: 100%;
    height: 30rem;
    margin: 4rem 0rem;
  }
  .aside__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: start;
  }
  .aside__paragragh {
    width: 40%;
    margin: 5rem 0rem;
    h3 {
      font-size: 40px;
      font-weight: bold;
      color: #000;
      text-transform: uppercase;
      span {
        color: #d87d4a;
      }
    }
    p {
      color: rgba(0, 0, 0, 0.7);
      line-height: 24px;
      font-size: 15px;
      font-weight: 500;
      margin-top: 2rem;
    }
  }
  .aside__image {
    width: 40%;
    height: 30rem;
    background-image: url("../assets/shared/desktop/image-best-gear.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
</style>
