<script setup>
import LogoHeader from './icons/LogoHeader.vue'
</script>
<template>
  <header class="header">
    <div class="header__logo">
      <LogoHeader />
    </div>
    <router-link class="lk" to="/#">Пользователь</router-link>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/styles/vars';
.header {
  display: flex;
  justify-content: space-between;
  padding: 46px 0;

  &__logo {
    @media (max-width: $mobile-s) {
      max-width: 100px;
    }

    svg {
      width: 100%;
    }
  }
}

.lk {
  text-decoration: none;
  color: #333;
}
</style>
