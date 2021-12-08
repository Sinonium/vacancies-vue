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
    v-if="selected === 'Crisis management'"
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
    v-if="selected === 'Project activities'"
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
    v-if="selected === 'Service. Work with clients'"
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
    v-if="selected === 'Analytics'"
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
    v-if="selected === 'Management'"
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

  <select
    v-if="selected === 'Sales'"
    name=""
    id=""
    v-model="subCategories"
  >
    <option
      v-for="option in subCategoriesF"
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
        text: 'Crisis management',
        value: 'Crisis management',
      },
      {
        text: 'Project activities',
        value: 'Project activities',
      },
      {
        text: 'Service. Work with clients',
        value: 'Service. Work with clients',
      },
      {
        text: 'Analytics',
        value: 'Analytics',
      },
      {
        text: 'Management',
        value: 'Management',
      },
      {
        text: 'Sales',
        value: 'Sales',
      }
    ]
    


    const subCategoriesA = [
      {
        text: 'Analysis',
        value: 'Analysis',
      },
      {
        text: 'Monitoring of financial condition',
        value: 'Monitoring of financial conditiont',
      },
      {
        text: 'Development of protocols',
        value: 'Development of protocols',
      },
      {
        text: 'Developing new strategies',
        value: 'Developing new strategies',
      }
    ]

    const subCategoriesB = [
      {
        text: 'Planning',
        value: 'Planning',
      },
      {
        text: 'Work with projects',
        value: 'Work with projects',
      },
      {
        text: 'Cost control',
        value: 'Cost control',
      },
      {
        text: 'Performance monitoring',
        value: 'Performance monitoring',
      },
    ]

    const subCategoriesC = [
      {
        text: 'Acting skills',
        value: 'Acting skills',
      },
      {
        text: 'Clear communication skills',
        value: 'Clear communication skills',
      },
      {
        text: 'Emotional intelligence',
        value: 'Emotional intelligence',
      },
      {
        text: 'Writing skills',
        value: 'Writing skills',
      },
    ]

    const subCategoriesD = [
      {
        text: 'Mathematical basis',
        value: 'Mathematical basis',
      },
      {
        text: 'Basic probability theory',
        value: 'Basic probability theoryt',
      },
      {
        text: 'Critical thinking',
        value: 'Critical thinking',
      },
      {
        text: 'Business thinking',
        value: 'Business thinking',
      },
    ]

    const subCategoriesE = [
      {
        text: 'Networking',
        value: 'Networking',
      },
      {
        text: 'Time management',
        value: 'Time management',
      },
      {
        text: 'Information analysis',
        value: 'Information analysis',
      },
      {
        text: 'Conducting meetings',
        value: 'Conducting meetings',
      },
    ]

    const subCategoriesF = [
      {
        text: 'Excel path',
        value: 'Excel path',
      },
      {
        text: 'Interview skills',
        value: 'Interview skills',
      },
      {
        text: 'Coachings',
        value: 'Coaching',
      },
      {
        text: 'Team management and leadership',
        value: 'Team management and leadership',
      }
    ]

    
    const selected = ref('')
    const subCategories = ref('')

    return { categories, selected, subCategories, subCategoriesA, subCategoriesB, subCategoriesC, subCategoriesD, subCategoriesE, subCategoriesF}
  },
}
</script>

<style></style>
