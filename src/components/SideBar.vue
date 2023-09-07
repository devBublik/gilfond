<script setup>
import CustomInput from './CustomInput.vue'
import PersonCard from './PersonCard.vue'
</script>

<template>
  <div class="sidebar">
    <h3 class="sidebar__title">Поиск сотрудников</h3>
    <CustomInput placeholder="Antonette, Bret" @fill="f" :value="value" />
    {{ persons }}
    <h3 class="sidebar__title">Результаты</h3>
    <PersonCard
      name="Alex"
      mail="ew.sorokina@mail,ru"
      src="https://avatars.githubusercontent.com/u/70776954?v=4"
    />
  </div>
</template>

<script>
import { mapState, useStore } from 'vuex'
import { ref } from 'vue'
export default {
  computed: mapState({
    persons: (state) => state.persons
  }),
  setup() {
    const store = useStore()
    const results = ref([])
    const value = ref('')
    const f = (val) => {
      console.log(val)
    }
    const onChangeCustom = (val) => {
      console.log('onChangeCustom', val)
      //   results.value = this.$store.state.persons.filter((person) => person.name.includes(val))
      //   console.log(results.value)
    }
    return { onChangeCustom, results, persons: (state) => state.persons, store, f, value }
  }
}
</script>

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
