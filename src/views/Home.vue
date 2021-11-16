<template>
    <DetailsAboutTeach />
  <!-- <div>lalala</div>
    <div @click="handleClick">{{counter}}</div>
    <div>
        sadasd
        sasa
    </div> -->
</template>

<script>
import DetailsAboutTeach from '../components/DetailsAboutTeach/DetailsAboutTeach.vue'
import { ref } from '@vue/reactivity'
export default {
    components: { DetailsAboutTeach },
    setup() {
        let counter = ref(0)
        const handleClick = () => {
            counter.value += 1
        }

        return { counter, handleClick }
    }
}
</script>

<style>
    
</style>