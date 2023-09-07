<script setup>
import CustomInput from './CustomInput.vue';
import  PersonCard from './PersonCard.vue';
</script>

<template>
  <div class="sidebar">
    <h3 class="sidebar__title">Поиск сотрудников</h3>
    <CustomInput placeholder="Antonette, Bret"/>
    <h3 class="sidebar__title">Результаты</h3>
    <PersonCard name="Alex" mail="ew.sorokina@mail,ru" src="https://avatars.githubusercontent.com/u/70776954?v=4"/>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  padding: 30px 20px;
  text-align: left;
  &__title {
    font: 600 normal 16px / 140% Montserrat;
    margin: 0 0 14px 0;
  }
}
</style>
