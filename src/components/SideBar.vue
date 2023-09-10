<script setup>
import CustomInput from './CustomInput.vue'
import PersonCard from './PersonCard.vue'
</script>

<template>
  <div class="sidebar">
    <h3 class="sidebar__title">Поиск сотрудников</h3>
    <div class="input">
      <CustomInput placeholder="Введите Id или имя " @on-change="onChange" />
    </div>
    <h3 class="sidebar__title">Результаты</h3>
    <div v-if="!results.length && !filter.length">Начните поиск</div>
    <div v-if="!results.length && filter.length">Ничего не найдено</div>
    <PersonCard
      v-for="person in results"
      :key="person.id"
      :name="person.name"
      :mail="person.mail"
      :alt="person.name"
      @click="$emit('showPerson', person)"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      results: [],
      filter: ''
    }
  },
  computed: {
    persons() {
      return this.$store.getters.getPersons
    }
  },
  methods: {
    ...mapMutations({
      filterPersons: 'filterPersons'
    }),
    getFilterPersons(val) {
      if (val) {
        this.results = this.persons.filter((person) =>
          person.name.toLowerCase().includes(val.toLowerCase())
        )
      } else {
        this.results = []
      }

      return this.results
    },
    onChange(val) {
      this.filter = val
      this.getFilterPersons(val)
      if (!val) {
        this.$emit('isHidePerson')
      } else {
        this.$emit('is-searching', true)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.input {
  margin: 0 0 30px 0;
  input {
    width: 100%;
    padding: 16px 24px;
    border-radius: 8px;
    border: 1.5px solid var(--all-colors-gray-gray-200, #e9ecef);
  }
}
.sidebar {
  padding: 30px 20px;
  text-align: left;
  &__title {
    font: 600 normal 16px / 140% Montserrat;
    margin: 0 0 14px 0;
  }
}
</style>
