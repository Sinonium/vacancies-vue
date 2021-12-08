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
    v-if="selected === 'Direction to choose'"
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
    v-if="selected === 'Introduction to Photography'"
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
    v-if="selected === 'Working with the model'"
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
        text: 'Direction to choose',
        value: 'Direction to choose',
      },
      {
        text: 'Introduction to Photography',
        value: 'Introduction to Photography',
      },
      {
        text: 'Working with the model',
        value: 'Working with the model',
      }
    ]
    


    const subCategoriesA = [
      {
        text: 'Fashion-photography',
        value: 'Fashion-photography',
      },
      {
        text: 'Advertising photography',
        value: 'Advertising photography',
      },
      {
        text: 'Wedding photography',
        value: 'Wedding photography',
      },
      {
        text: 'Food-photography',
        value: 'Food-photography',
      }
    ]

    const subCategoriesB = [
      {
        text: 'Photography and Style',
        value: 'Photography and Style',
      },
      {
        text: 'Fashion magazines',
        value: 'Fashion magazines',
      },
      {
        text: 'Photographic equipment',
        value: 'Photographic equipment',
      },
      {
        text: 'Production and publishing',
        value: 'Production and publishing',
      }
    ]

    const subCategoriesC = [
      {
        text: 'Portrait photography',
        value: 'Portrait photography',
      },
      {
        text: 'Work with light',
        value: 'Work with light',
      },
      {
        text: 'Fashion pictures',
        value: 'Fashion pictures',
      },
      {
        text: 'Lifestyle photography',
        value: 'Lifestyle photography',
      },
      {
        text: 'Foreshortening',
        value: 'Foreshortening',
      },
      {
        text: 'Photo for magazines',
        value: 'Photo for magazines',
      }
    ]

    
    
    const selected = ref('')
    const subCategories = ref('')

    return { categories, selected, subCategories, subCategoriesA, subCategoriesB, subCategoriesC}
  },
}
</script>

<style></style>
