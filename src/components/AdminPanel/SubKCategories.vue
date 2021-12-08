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
  
  

  <select
    v-if="selected === 'The Foundations of Sound Design'"
    name=""
    id=""
    v-model="subCategories"
  >
    <option
      v-for="option in subCategoriesA"
      :key="option.text"
      :value="option.value"
    >
    {{ option.text }}
    </option>
  </select>

  <select
    v-if="selected === 'Sound Design'"
    name=""
    id=""
    v-model="subCategories"
  >
    <option
      v-for="option in subCategoriesB"
      :key="option.text"
      :value="option.value"
    >
    {{ option.text }}
    </option>
  </select>

</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const categories = [
      {
        text: 'The Foundations of Sound Design',
        value: 'The Foundations of Sound Design',
      },
      {
        text: 'Sound Design',
        value: 'Sound Design',
      }
    ]
    


    const subCategoriesA = [
      {
        text: 'Learn the Core FX of Sound Design',
        value: 'Learn the Core FX of Sound Design',
      },
      {
        text: 'Sound Sources',
        value: 'Sound Sources',
      },
      {
        text: 'Filters',
        value: 'Filters',
      },
      {
        text: 'Envelopes',
        value: 'Envelopes',
      },
      {
        text: 'Modulation',
        value: 'Modulation',
      },
      {
        text: 'Pitch & Tuning',
        value: 'Pitch & Tuning',
      },
      {
        text: 'Stretch & Fade',
        value: 'Stretch & Fade',
      }
    ]

    const subCategoriesB = [
      {
        text: 'Ambient Pads',
        value: 'Ambient Pads',
      },
      {
        text: 'Deep Sub Bass',
        value: 'Deep Sub Bass',
      },
      {
        text: 'Pluck Sounds',
        value: 'Pluck Sounds',
      },
      {
        text: 'Huge Sub Drops',
        value: 'Huge Sub Drops',
      },
      {
        text: 'Dark Pulses',
        value: 'YDark Pulses',
      },
      {
        text: 'Ominous Drones',
        value: 'Ominous Drones',
      },
      {
        text: 'Epic Risers',
        value: 'Epic Risers',
      }
    ]

    
    const selected = ref('')
    const subCategories = ref('')

    return { categories, selected, subCategories, subCategoriesA, subCategoriesB, subCategoriesC}
  },
}
</script>

<style></style>
