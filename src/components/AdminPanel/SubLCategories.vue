<template>
  <select 
  @change="handleInput"
  name="" id="" v-model="selected">
    <option
      v-for="option in categories"
      :key="option.text"
      :value="option.value"
    >
    {{ option.text }}
    </option>
  </select>
  
  

  <select
  @change="handleInput"
    v-if="selected === 'Languages'"
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
  @change="handleInput"
    v-if="selected === 'Scientific subjects'"
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
  setup(props,context) {
    const handleInput = () => {
      console.log(selected.value);
      console.log(subCategories.value);
      context.emit('selectedCates', selected.value, subCategories.value)
    };
    const categories = [
      {
        text: 'Languages',
        value: 'Languages',
      },
      {
        text: 'Scientific subjects',
        value: 'Scientific subjects',
      }
    ]
    


    const subCategoriesA = [
      {
        text: 'English',
        value: 'English',
      },
      {
        text: 'German',
        value: 'German',
      },
      {
        text: 'Spanish',
        value: 'Spanish',
      },
      {
        text: 'Russian',
        value: 'Russian',
      },
      {
        text: 'Italian',
        value: 'Italian',
      },
      {
        text: 'Japanese',
        value: 'Japanese',
      },
      {
        text: 'French',
        value: 'French',
      }
    ]

    const subCategoriesB = [
      {
        text: 'Physics',
        value: 'Physics',
      },
      {
        text: 'Chemistry',
        value: 'Chemistry',
      },
      {
        text: 'Mathematics',
        value: 'Mathematics',
      },
      {
        text: 'Astronomy',
        value: 'Astronomy',
      },
      {
        text: 'Space Science',
        value: 'Space Science',
      },
      {
        text: 'Earth Science',
        value: 'Earth Science',
      },
      {
        text: 'Materials Science',
        value: 'Materials Science',
      }
    ]

    
    const selected = ref('')
    const subCategories = ref('')

    return { handleInput, categories, selected, subCategories, subCategoriesA, subCategoriesB}
  },
}
</script>

<style></style>
