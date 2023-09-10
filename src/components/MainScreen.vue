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
        'main-screen__screen--flex': !this.personOnScreen,
        'main-screen__screen--white': isWhite,
        'main-screen__screen--blur': isLoading
      }"
    >
      <div v-if="!this.personOnScreen">Выберите сотрудника, чтобы посмотреть его профиль</div>
      <PersonInfoScreen
        v-if="personOnScreen?.name"
        :name="this.personOnScreen.name"
        :mail="this.personOnScreen.email"
        :alt="this.personOnScreen.name"
        :phone="this.personOnScreen.phone"
        :about="this.personOnScreen.company.catchPhrase"
      />
      <Loader v-if="isLoading" />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import axios from 'axios'
import Loader from './Loader.vue'
export default {
  components: { Loader },
  setup() {
    const store = useStore()
    const persons = computed(() => store.state.persons)

    return {
      persons
    }
  },
  data() {
    return {
      personOnScreen: null,
      isWhite: true,
      isLoading: false
    }
  },
  methods: {
    async getPerson(id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => (this.personOnScreen = { ...res.data }))
        .then(() => (this.isLoading = false))
    },
    showPerson(person) {
      this.isLoading = true
      this.getPerson(person.id)
    },
    hide() {
      this.personOnScreen = null
    },
    isSearching() {
      this.isWhite = false
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
