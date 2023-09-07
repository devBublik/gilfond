<script setup>
import SideBar from './SideBar.vue'
import PersonInfoScreen from './RersonInfoScreen.vue'
</script>

<template>
  <div class="main-screen">
    <div class="main-screen__sidebar">
      <SideBar />
    </div>
    {{ response }}
    <div class="main-screen__screen">
      <PersonInfoScreen
        name="Alex"
        mail="ew.sorokina@mail,ru"
        src="https://avatars.githubusercontent.com/u/70776954?v=4"
        phone="89525867697"
        about="123"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import useFetch from '@/composition/useFetch'
export default {
  setup() {
    const store = useStore()
    const persons = computed(() => store.state.persons)
    const result = ref(null)
    console.log('app')

    return {
      persons,
      result
    }
  }
}
</script>

<style lang="scss">
.main-screen {
  min-height: 575px;
  height: 100%;
  border-radius: 10px;
  background: #fdfdfd;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;

  &__sidebar {
    width: 23%;
  }
  &__screen {
    padding: 30px 30px 24px 20px;
    width: 77%;
    border-left: 1px solid #e0e0e0;
  }
}
</style>
