<template>
  <aside class="main__nav__aside">
    <div class="container">
      <div class="nav__aside__contents">
        <div class="nav__aside__content">
          <img
            src="../assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt="headphones__image"
            srcset=""
          />
          <div class="nav__aside__text">
            <h1>headphones</h1>
            <h4 @click="this.$router.push('/headphone')">
              shop <i class="fa-solid fa-chevron-right"></i>
            </h4>
          </div>
        </div>

        <div class="nav__aside__content">
          <img
            src="../assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt="speaker__image"
            srcset=""
          />
          <div class="nav__aside__text">
            <h1>speakers</h1>
            <h4 @click="this.$router.push('/speaker')">
              shop <i class="fa-solid fa-chevron-right"></i>
            </h4>
          </div>
        </div>
        <div class="nav__aside__content">
          <img
            src="../assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="earphone__image"
            srcset=""
          />
          <div class="nav__aside__text">
            <h1>earphone</h1>
            <h4 @click="this.$router.push('/earphone')">
              shop <i class="fa-solid fa-chevron-right"></i>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "NavAside",
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0px;
  box-sizing: border-box;
}
@media screen and (min-width: 1100px) {
  .main__nav__aside {
    width: 100%;
    height: 20rem;
    background-color: #fff;
  }
  .nav__aside__contents {
    width: 100%;
    padding-top: 6rem;
    display: flex;
    justify-content: space-between;
  }
  .nav__aside__content {
    width: 29%;
    height: 11rem;
    border-radius: 5px;
    background-color: #f2f2f2;
    img {
      width: 10rem;
      margin-top: -3rem;
    }
    .nav__aside__text {
      margin-top: -1rem;
      h1 {
        text-transform: uppercase;
        color: #000;
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
      }
      h4 {
        margin-top: 1rem;
        color: rgba(0, 0, 0, 0.61);
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
        text-transform: uppercase;
        &:hover {
          color: #fbaf85;
        }
        i {
          color: #fbaf85;
          font-size: 13px;
          font-weight: bolder;
        }
      }
    }
  }
}
@media screen and (max-width: 1100px) and (min-width: 600px) {
  .main__nav__aside {
    width: 100%;
    height: 20rem;
    background-color: #fff;
  }
  .nav__aside__contents {
    width: 100%;
    padding-top: 6rem;
    display: flex;
    justify-content: space-between;
  }
  .nav__aside__content {
    width: 29%;
    height: 11rem;
    border-radius: 5px;
    background-color: #f2f2f2;
    img {
      width: 10rem;
      margin-top: -3rem;
    }
    .nav__aside__text {
      margin-top: -1rem;
      h1 {
        text-transform: uppercase;
        color: #000;
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
      }
      h4 {
        margin-top: 1rem;
        color: rgba(0, 0, 0, 0.61);
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
        text-transform: uppercase;
        &:hover {
          color: #fbaf85;
        }
        i {
          color: #fbaf85;
          font-size: 13px;
          font-weight: bolder;
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .main__nav__aside {
    width: 100%;
    min-height: 20rem;
    background-color: #fff;
  }
  .nav__aside__contents {
    width: 100%;
    padding-top: 6rem;
    display: grid;
    gap: 4rem;
    grid-template-columns: 100%;
  }
  .nav__aside__content {
    width: 100%;
    height: 11rem;
    border-radius: 5px;
    background-color: #f2f2f2;
    img {
      width: 10rem;
      margin-top: -3rem;
    }
    .nav__aside__text {
      margin-top: -1rem;
      h1 {
        text-transform: uppercase;
        color: #000;
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
      }
      h4 {
        margin-top: 1rem;
        color: rgba(0, 0, 0, 0.61);
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
        text-transform: uppercase;
        &:hover {
          color: #fbaf85;
        }
        i {
          color: #fbaf85;
          font-size: 13px;
          font-weight: bolder;
        }
      }
    }
  }
}
</style>
