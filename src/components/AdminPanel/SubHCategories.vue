<template>
  <select @change="handleInput" name="" id="" v-model="selected">
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
    v-if="selected === 'Create'"
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
    v-if="selected === 'Design'"
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
  @change="handleInput"
    v-if="selected === 'Introduction'"
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
  setup(props,context) {
    const handleInput = () => {
      console.log(selected.value);
      console.log(subCategories.value);
      context.emit('selectedCates', selected.value, subCategories.value)
    };
    const categories = [
      {
        text: 'Create',
        value: 'Create',
      },
      {
        text: 'Design',
        value: 'Design',
      },
      {
        text: 'Introduction',
        value: 'Introduction',
      }
    ]
    


    const subCategoriesA = [
      {
        text: 'Create a Clothing Collection',
        value: 'Create a Clothing Collection',
      },
      {
        text: 'Create a Dress from Scratch',
        value: 'Create a Dress from Scratch',
      },
      {
        text: 'Creation of a Streetwear Brand',
        value: 'Creation of a Streetwear Brand',
      }
    ]

    const subCategoriesB = [
      {
        text: 'Jewelry Design',
        value: 'Jewelry Design',
      },
      {
        text: 'Design and Make a Dress',
        value: 'Design and Make a Dress',
      },
      {
        text: 'Design Leather Accessories',
        value: 'Design Leather Accessories',
      },
      {
        text: 'Design of Textile Patterns',
        value: 'Design of Textile Patterns',
      }
    ]

    const subCategoriesC = [
      {
        text: 'Introduction to Makeup Techniques',
        value: 'Introduction to Makeup Techniques',
      },
      {
        text: 'Introduction to Knitting',
        value: 'Introduction to Knitting',
      },
      {
        text: 'Introduction to Jewelry Techniques',
        value: 'Introduction to Jewelry Techniques',
      },
      {
        text: 'Introduction to Fashion Design',
        value: 'Introduction to Fashion Design',
      }
    ]

    
    
    const selected = ref('')
    const subCategories = ref('')

    return { handleInput, categories, selected, subCategories, subCategoriesA, subCategoriesB, subCategoriesC}
  },
}
</script>

<style></style>
