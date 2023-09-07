<script setup>
import MainScreen from './components/MainScreen.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="wrapper">
    <main class="content">
      <TheHeader />
      <MainScreen />
    </main>

    <footer class="footer">{{ q }} footer</footer>
  </div>
</template>

<script>
import { mapMutations, mapState, useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
export default {
  setup() {
    const store = useStore()

    const q = ref(null)
    console.log('app')

    return {
      persons: computed(() => store.state.persons),
      q
    }
  },
  methods: {
    ...mapMutations(['setPersons'])
  },
  computed: mapState({
    count: (state) => state.persons
  }),
  mounted() {
    console.log('mounted')
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => this.$store.commit('setPersons', res.data))
      .then(() => console.log('state', this.persons))
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
