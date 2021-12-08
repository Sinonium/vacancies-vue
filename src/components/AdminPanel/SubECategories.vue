
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
    v-if="selected === 'Communication'"
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
    v-if="selected === 'Thinking'"
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
    v-if="selected === 'Languages'"
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
    v-if="selected === 'Reading Club'"
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

</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const categories = [
      {
        text: 'Communication',
        value: 'Communication',
      },
      {
        text: 'Thinking',
        value: 'Thinking',
      },
      {
        text: 'Languages',
        value: 'Languages',
      },
      {
        text: 'Reading Club',
        value: 'Reading Club',
      }
    ]
    


    const subCategoriesA = [
      {
        text: 'Development of communication skills',
        value: 'Development of communication skills',
      },
      {
        text: 'Negotiation skills',
        value: 'Negotiation skills',
      },
      {
        text: 'Making the right decision',
        value: 'Making the right decision',
      },
      {
        text: 'Teamwork and flexibility',
        value: 'Teamwork and flexibilitys',
      }
    ]

    const subCategoriesB = [
      {
        text: 'French',
        value: 'French',
      },
      {
        text: 'Spanish',
        value: 'Spanish',
      },
      {
        text: 'German',
        value: 'German',
      },
      {
        text: 'English',
        value: 'English',
      },
    ]

    const subCategoriesC = [
      {
        text: 'iMovie',
        value: 'iMovie',
      },
      {
        text: 'Lightworks',
        value: 'Lightworks',
      },
      {
        text: 'DaVinci Resolve',
        value: 'DaVinci Resolve',
      },
      {
        text: 'Adobe Premiere Pro CC',
        value: 'Adobe Premiere Pro CC',
      },
      {
        text: 'HitFilm Pro',
        value: 'HitFilm Pro',
      },
      {
        text: 'FilmoraPro',
        value: 'FilmoraPro',
      }
    ]

    const subCategoriesD = [
      {
        text: 'Fantasy',
        value: 'Fantasy',
      },
      {
        text: 'Fantastic',
        value: 'Fantastic',
      },
      {
        text: 'Detectives',
        value: 'Detectives',
      },
      {
        text: 'Romance novels',
        value: 'Romance novels',
      },
    ]
    
    const selected = ref('')
    const subCategories = ref('')

    return { categories, selected, subCategories, subCategoriesA, subCategoriesB, subCategoriesC, subCategoriesD}
  },
}
</script>

<style></style>
