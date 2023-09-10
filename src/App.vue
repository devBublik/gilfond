<script setup>
// import MainScreen from './components/MainScreen.vue'
// import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <main class="content">
    <RouterView></RouterView>
  </main>
</template>

<script>
import { mapActions, mapMutations, mapState, useStore } from 'vuex'
import { computed, ref } from 'vue'
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
    ...mapMutations(['setPersons']),
    ...mapActions({
      fetchPersons: 'fetchPersons'
    })
  },
  computed: mapState({
    count: (state) => state.persons
  }),
  mounted() {
    console.log('mounted')
    this.fetchPersons()
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
