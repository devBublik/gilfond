<template>
  <div class="input">
    <input type="text" :placeholder="placeholder" @input="$emit('onChange', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    placeholder: String
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
