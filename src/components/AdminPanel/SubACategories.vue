<template>
  <select name="" id="" v-model="selected">
    <option
      v-for="option in categories"
      :key="option.text"
      :value="option.value"
    >
      {{ option.text }}
    </option>
  </select>
  <select name="" id="" v-model="subCategories">
      <!-- <option v-for="option in categories." :value="option.value"></option> -->
  </select>
  <span>{{ selected }}</span>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const categories = [
      {
        text: 'web development',
        value: 'a',
        subCata: [
          {
            text: 'Java Script',
            value: 'Java Script',
          },
          {
            text: 'Java Script1',
            value: 'Java Script1',
          },
          {
            text: 'Java Script2',
            value: 'Java Script2',
          },
          {
            text: 'Java Script3',
            value: 'Java Script3',
          },
        ],
      },
      {
        text: 'game development',
        value: 'b',
      },
    ]
    const selected = ref('')
    const subCategories = ref('')

    return { categories, selected, subCategories }
  },
}
</script>

<style></style>
