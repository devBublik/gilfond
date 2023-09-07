<script setup>
import MainScreen from './components/MainScreen.vue'
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <div class="wrapper">
    <main class="content">
      <TheHeader/>
      <MainScreen />
    </main>
    
    <footer class="footer">{{ data }} footer</footer>
  </div>
</template>

<script> 
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import {useFetch} from '@vueuse/core'
export default {
  setup () {
    const store = useStore()
    const persons = computed(() => store.state.persons)
    const q = ref(null)
    console.log('app')

    onMounted(async() => {
        q.value = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
    })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then((data) => q.value = data)

    const {isFetching, error, data} = useFetch('https://jsonplaceholder.typicode.com/users').json()

    return {
      persons,
      q,
      isFetching,
      error,
      data
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 1299px;
  padding: 0 15px;
  margin: auto;
  text-align: center;
  width: 100%;
}


</style>
