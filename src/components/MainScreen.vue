<script setup>
import SideBar from './SideBar.vue'
import PersonInfoScreen from './RersonInfoScreen.vue'
</script>

<template>
  <div class="main-screen">
    <div class="main-screen__sidebar">
      <SideBar @show-person="showPerson" @is-hide-person="hide" @is-searching="isSearching" />
    </div>
    <div
      class="main-screen__screen"
      :class="{
        'main-screen__screen--flex': isFlex,
        'main-screen__screen--white': isWhite,
        'main-screen__screen--blur': isLoading
      }"
    >
      <div v-if="!personOnScreen">Выберите сотрудника, чтобы посмотреть его профиль</div>
      <PersonInfoScreen
        v-if="personOnScreen?.name"
        :name="personOnScreen.name"
        :mail="personOnScreen.email"
        :alt="personOnScreen.name"
        :phone="personOnScreen.phone"
        :about="personOnScreen.company.catchPhrase"
      />
      <Loader v-if="isLoading" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from './Loader.vue'
export default {
  components: { Loader },
  data() {
    return {
      personOnScreen: null,
      isWhite: true,
      isLoading: false,
      isFlex: true
    }
  },
  computed: {
    persons() {
      return this.$store.getters.getPersons
    }
  },
  methods: {
    async getPerson(id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => (this.personOnScreen = { ...res.data }))
        .then(() => (this.isFlex = false))
        .then(() => (this.isLoading = false))
    },
    showPerson(person) {
      this.isLoading = true
      this.getPerson(person.id)
    },
    hide() {
      this.personOnScreen = null
      this.isFlex = true
    },
    isSearching() {
      this.isWhite = false
      this.isFlex = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars';
.main-screen {
  min-height: 575px;
  height: 100%;
  border-radius: 10px;
  background: #fdfdfd;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;

  @media (max-width: $tablet) {
    flex-direction: column;
    min-height: auto;
  }

  &__sidebar {
    width: 23%;

    @media (max-width: $tablet) {
      width: 100%;
    }
  }
  &__screen {
    padding: 30px 30px 24px 20px;
    width: 77%;
    border-left: 1px solid #e0e0e0;

    @media (max-width: $tablet) {
      width: 100%;
    }

    &--white {
      background: #fff;
    }

    &--grey {
      background: #fdfdfd;
    }

    &--flex {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &--blur {
      filter: blur(3px);
    }
  }
}
</style>
