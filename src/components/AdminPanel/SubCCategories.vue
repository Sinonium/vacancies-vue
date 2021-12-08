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
    v-if="selected === 'Analysis'"
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
    v-if="selected === 'Accounting'"
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

  <select
    v-if="selected === 'Microeconomics'"
    name=""
    id=""
    v-model="subCategories"
  >
    <option
      v-for="option in subCategoriesC"
      :key="option.text"
      :value="option.value"
    >
    {{ option.text }}
    </option>
  </select>

  <select
    v-if="selected === 'Banking'"
    name=""
    id=""
    v-model="subCategories"
  >
    <option
      v-for="option in subCategoriesD"
      :key="option.text"
      :value="option.value"
    >
    {{ option.text }}
    </option>
  </select>

  <select
    v-if="selected === 'Еaxes'"
    name=""
    id=""
    v-model="subCategories"
  >
    <option
      v-for="option in subCategoriesE"
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
        text: 'Analysis',
        value: 'Analysis',
      },
      {
        text: 'Accounting',
        value: 'Accounting',
      },
      {
        text: 'Microeconomics',
        value: 'Microeconomics',
      },
      {
        text: 'Banking',
        value: 'Banking',
      },
      {
        text: 'Еaxes',
        value: 'Еaxes',
      }
    ]
    


    const subCategoriesA = [
      {
        text: 'The financial Analysis',
        value: 'The financial Analysis',
      },
      {
        text: 'Management Analysis',
        value: 'Management Analysis',
      },
      {
        text: 'Marketing Analysis',
        value: 'Marketing Analysis',
      },
      {
        text: 'Investment Analysis',
        value: 'Investment Analysis',
      }
    ]

    const subCategoriesB = [
      {
        text: 'Innovative thinking',
        value: 'Innovative thinking',
      },
      {
        text: 'Management accounting skills',
        value: 'Management accounting skills',
      },
      {
        text: 'Use of IT technologies',
        value: 'Use of IT technologies',
      },
      {
        text: 'International standards',
        value: 'International standards',
      },
    ]

    const subCategoriesC = [
      {
        text: 'Consumption theory',
        value: 'Consumption theory',
      },
      {
        text: 'Aggregation',
        value: 'Aggregation',
      },
      {
        text: 'Market structure',
        value: 'Market structure',
      },
      {
        text: 'Auction theory',
        value: 'Auction theory',
      },
    ]

    const subCategoriesD = [
      {
        text: 'Types of banks',
        value: 'Types of banks',
      },
      {
        text: 'Types of risk',
        value: 'Types of risk',
      },
      {
        text: 'Work with clients assets',
        value: 'Critical thinking',
      },
      {
        text: 'Banking sector problems',
        value: 'Banking sector problems',
      },
    ]

    const subCategoriesE = [
      {
        text: 'Direct taxes',
        value: 'Direct taxes',
      },
      {
        text: 'Indirect taxes',
        value: 'Indirect taxes',
      },
      {
        text: 'Lump-sum taxes',
        value: 'Lump-sum taxes',
      },
      {
        text: 'Income taxes',
        value: 'Income taxes',
      },
    ]

    
    const selected = ref('')
    const subCategories = ref('')

    return { categories, selected, subCategories, subCategoriesA, subCategoriesB, subCategoriesC, subCategoriesD, subCategoriesE}
  },
}
</script>

<style></style>
