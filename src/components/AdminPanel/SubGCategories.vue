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
    v-if="selected === 'Marketing'"
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
    v-if="selected === 'Sales'"
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
        text: 'Marketing',
        value: 'Marketing',
      },
      {
        text: 'Sales',
        value: 'Sales',
      }
    ]
    


    const subCategoriesA = [
      {
        text: 'Traditional Marketing',
        value: 'Traditional Marketing',
      },
      {
        text: 'Outbound Marketing',
        value: 'Outbound Marketing',
      },
      {
        text: 'Inbound Marketing',
        value: 'Inbound Marketing',
      },
      {
        text: 'Digital Marketing',
        value: 'Digital Marketing',
      },
      {
        text: 'Search Engine Marketing',
        value: 'Search Engine Marketing',
      },
      {
        text: 'Content Marketing',
        value: 'Content Marketing',
      },
      {
        text: 'Social Media Marketing',
        value: 'Social Media Marketing',
      },
      {
        text: 'Video Marketing',
        value: 'Video Marketing',
      }
    ]

    const subCategoriesB = [
      {
        text: 'Inside Sales',
        value: 'Inside Sales',
      },
      {
        text: 'Outside Sales',
        value: 'Outside Sales',
      },
      {
        text: 'B2B Sales',
        value: 'B2B Sales',
      },
      {
        text: 'B2C Sales',
        value: 'B2C Sales',
      },
      {
        text: 'Business Development Sales',
        value: 'Business Development Sales',
      },
      {
        text: 'eCommerce Sales',
        value: 'eCommerce Sales',
      },
      {
        text: 'Agency Sales',
        value: 'Agency Sales',
      }
    ]

    
    
    const selected = ref('')
    const subCategories = ref('')

    return { categories, selected, subCategories, subCategoriesA, subCategoriesB, subCategoriesC, subCategoriesD}
  },
}
</script>

<style></style>
