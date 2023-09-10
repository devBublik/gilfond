<template>
  <div v-if="error && timer" class="error">
    Ошибка {{ error }}. Попробуйте перезагрузить страницу
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ErrorModal',
  setup() {
    const timer = ref(4)

    let tick = setInterval(function () {
      timer.value--

      if (timer.value == 0) {
        clearInterval(tick)
      } else {
        console.log(timer.value)
      }
    }, 1000)

    return { timer, tick }
  },
  computed: {
    error() {
      return this.$store.getters.getError
    }
  }
}
</script>

<style scoped lang="scss">
.error {
  position: absolute;
  padding: 24px;
  top: 20px;
  left: calc((100% - 472px) / 2);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>
