<template>
  <section
    :class="order ? 'properties__section' : 'properties__section--reverse'"
  >
    <div class="properties___image">
      <img :src="state.image.desktop" :alt="state.slug" />
    </div>
    <div class="properties___content">
      <h4
        :class="state.new ? 'properties__new--true' : 'properties__new--false'"
      >
        new product
      </h4>
      <h1 class="properties__name">{{ state.name }}</h1>
      <p class="properties__description">{{ state.description }}</p>
      <button class="btn__see__products--brown" @click="toLink">
        see product
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "innerSection",
  props: {
    order: {
      type: Boolean,
    },
    state: {
      type: Object,
    },
  },
  methods: {
    toLink() {
      this.$router.push(`/product/${this.state.slug}`);
    },
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
  .properties__section {
    width: 80%;
    height: 30rem;
    margin: 8rem auto;
    display: flex;
    justify-content: space-between;
  }
  .properties__section--reverse {
    width: 80%;
    height: 30rem;
    margin: 8rem auto;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
  .properties___image {
    width: 47%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  .properties___content {
    width: 47%;
    height: 90%;
    margin: 5% 0rem;
    text-align: start;
  }
  .properties__new--true {
    color: #d87e4ad3;
    letter-spacing: 2px;
    font-size: 14px;
    line-height: 45px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .properties__new--false {
    display: none;
  }
  .properties__name {
    line-height: 44px;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1.43px;
    width: 70%;
    color: #000;
    margin-bottom: 2rem;
  }
  .properties__description {
    color: rgba(0, 0, 0, 0.678);
    font-size: 15px;
    line-height: 25px;
    width: 90%;
    margin-bottom: 3rem;
  }
}
</style>
