<template>
  <div :key="item.id" class="modal__item">
    <img class="modal__item--img" :src="item.image.desktop" :alt="item.slug" />
    <div class="modal__item--identity">
      <h1>{{ item.name.slice(0, 4) }}</h1>
      <h3>&dollar; {{ item.price.toLocaleString("en-US") }}</h3>
    </div>
    <div class="modal__update">
      <div class="modal__calc">
        <i class="fa-solid fa-minus icon"></i>
      </div>
      <div class="modal__calc">
        <h2>{{ item.value }}</h2>
      </div>
      <div class="modal__calc">
        <i class="fa-solid fa-plus icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import createStore from "../store/index";
export default {
  name: "ModalItem",
  props: {
    slug: String,
  },
  setup() {
    const Cart = createStore.state.Cart;
    const item = Cart.find((state) => state.slug === this.slug);

    return {
      item,
    };
  },
};
</script>
