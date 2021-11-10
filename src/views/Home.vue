<template>
  <div>lalala</div>
    <div @click="handleClick">{{counter}}</div>
    <div>
        sadasd
        sasa
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        let counter = ref(0)
        const handleClick = () => {
            counter += 1
            console.log(counter);
        }

        return { counter, handleClick }
    }
}
</script>

<style>

</style>