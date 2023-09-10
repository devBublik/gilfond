<template>
  <div class="error-page">
    <img src="@/assets/images/404.png" alt="error page" />
    <div class="error-page__text">Извините, страница отдыхает</div>
    <router-link class="error-page__link" to="/">На главную</router-link>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-height: 50vh;
  }

  &__link {
    text-decoration: none;
    color: #333;
    display: block;
    font-size: 20px;
    margin: 20px 0 0 0;
    padding: 0 0 0 32px;
    position: relative;
    transition: color 0.3s ease;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      left: 0px;
      top: 3px;
      background: url(/src/assets/images/arrow.png);
      width: 20px;
      height: 17px;
      background-size: contain;
      background-repeat: no-repeat;
      transform: rotateZ(180deg);
    }

    &:hover {
      color: #000;
    }
  }
}
</style>
