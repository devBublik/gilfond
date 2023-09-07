<template>
    <div class="input">
        <input type="text" :placeholder="placeholder" :value="value" @change="onChange">
    </div>
</template>

<script>
import { ref } from 'vue'
export default{
    name: 'CustomInput',
    props: {
        placeholder: String,
    },
    setup () {
        const value = ref('')

        const onChange = (e) => {
            console.log(e.target.value)
            value.value = e.target.value
        }

        return {
            value,
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
        border: 1.5px solid var(--all-colors-gray-gray-200, #E9ECEF);
    }
}
</style>