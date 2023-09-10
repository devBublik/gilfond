<template>
  <div class="person-card active">
    <div class="person-card__photo">
      <img src="@/assets/images/ava.jpg" :alt="name" />
    </div>
    <div class="person-card__info">
      <div class="person-card__name">{{ name }}</div>
      <div class="person-card__mail">{{ mail }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    src: String,
    name: String,
    mail: String
  }
}
</script>

<style lang="scss">
.person-card {
  display: flex;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  align-items: center;
  gap: 15px;
  margin: 0 0 18px 0;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    background: #e0e0e0;
  }

  &__photo {
    max-width: 70px;
    height: 70px;

    img {
      width: 70px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }

  &__name {
    color: #333;
    font: normal 600 14px / 100% Montserrat;
    margin: 0 0 4px 0;
  }

  &__mail {
    color: #76787d;
    font: normal 400 14px / 100% Montserrat;
  }
}
</style>
