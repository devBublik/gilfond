<template>
  <div v-if="error && timer" class="error">Ошибка {{ error }} {{ this.timerCount }}</div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ErrorModal',
  setup() {
    const timer = ref(5)

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
