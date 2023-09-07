<template>
  <div class="input">
    <input type="text" :placeholder="placeholder" :value="value" @change="$emit('fill', $event)" />
  </div>
</template>

<script>
import { ref, defineEmits } from 'vue'
export default {
  name: 'CustomInput',
  emits: ['fill'],
  props: {
    placeholder: String,
    value: String
  },

  setup(_, { emit }) {
    // const emit = defineEmits(['fill'])

    const onChange = (e) => {
      console.log(e.target.value)
      emit('fill', e.target.value)
    }

    return {
      onChange
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  margin: 0 0 30px 0;
  input {
    width: 100%;
    padding: 16px 24px;
    border-radius: 8px;
    border: 1.5px solid var(--all-colors-gray-gray-200, #e9ecef);
  }
}
</style>
