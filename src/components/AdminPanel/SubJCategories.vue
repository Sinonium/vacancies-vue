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
    v-if="selected === 'Physical Fitness'"
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
    v-if="selected === 'Yoga'"
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
    v-if="selected === 'Therapeutic Fasting'"
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
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const categories = [
      {
        text: 'Physical Fitness',
        value: 'Physical Fitness',
      },
      {
        text: 'Yoga',
        value: 'Yoga',
      },
      {
        text: 'Therapeutic Fasting',
        value: 'Therapeutic Fasting',
      }
    ]
    


    const subCategoriesA = [
      {
        text: 'Muscular Endurance',
        value: 'Muscular Endurance',
      },
      {
        text: 'Muscular Strength',
        value: 'Muscular Strength',
      },
      {
        text: 'Flexibility',
        value: 'Flexibility',
      },
      {
        text: 'Body Composition',
        value: 'Body Composition',
      },
      {
        text: 'Speed',
        value: 'Speed',
      },
      {
        text: 'Physical Intelligence',
        value: 'Physical Intelligence',
      }
    ]

    const subCategoriesB = [
      {
        text: 'Ashtanga vinyasa yoga',
        value: 'Ashtanga vinyasa yoga',
      },
      {
        text: 'Hatha yoga',
        value: 'Hatha yoga',
      },
      {
        text: 'Iyengar Yoga',
        value: 'Iyengar Yoga',
      },
      {
        text: 'Bikram Yoga',
        value: 'Bikram Yoga',
      },
      {
        text: 'Yin Yoga',
        value: 'Yin Yoga',
      }
    ]

    const subCategoriesC = [
      {
        text: 'Complete fasting',
        value: 'Complete fasting',
      },
      {
        text: 'Absolute fasting',
        value: 'Absolute fasting',
      },
      {
        text: 'Combined fasting',
        value: 'Combined fasting',
      }
    ]

    
    
    const selected = ref('')
    const subCategories = ref('')

    return { categories, selected, subCategories, subCategoriesA, subCategoriesB, subCategoriesC}
  },
}
</script>

<style></style>
