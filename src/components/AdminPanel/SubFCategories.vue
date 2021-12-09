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
    v-if="selected === 'Web design'"
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
    v-if="selected === '3D'"
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
    v-if="selected === 'Video Editing'"
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
  @change="handleInput"
    v-if="selected === 'Drawing and Illustration'"
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
  setup(props,context) {
    const handleInput = () => {
      console.log(selected.value);
      console.log(subCategories.value);
      context.emit('selectedCates', selected.value, subCategories.value)
    };
    const categories = [
      {
        text: 'Web design',
        value: 'Web design',
      },
      {
        text: '3D',
        value: '3D',
      },
      {
        text: 'Video Editing',
        value: 'Video Editing',
      },
      {
        text: 'Drawing and Illustration',
        value: 'Drawing and Illustration',
      }
    ]
    


    const subCategoriesA = [
      {
        text: 'Figma',
        value: 'Figma',
      },
      {
        text: 'WordPress',
        value: 'WordPress',
      },
      {
        text: 'Photoshop',
        value: 'Photoshop',
      },
      {
        text: 'Google Web Designer',
        value: 'Google Web Designer',
      },
      {
        text: 'Dreamweaver',
        value: 'Dreamweaver',
      }
    ]

    const subCategoriesB = [
      {
        text: '3ds max',
        value: '3ds max',
      },
      {
        text: 'Houdini',
        value: 'Houdini',
      },
      {
        text: 'ZBrush',
        value: 'ZBrush',
      },
      {
        text: 'Sculptris',
        value: 'Sculptris',
      },
      {
        text: 'Blender',
        value: 'Blender',
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
      },
    ]

    const subCategoriesD = [
      {
        text: 'Photoshop CC',
        value: 'Photoshop CC',
      },
      {
        text: 'Procreate',
        value: 'Procreate',
      },
      {
        text: 'Corel Painter',
        value: 'Corel Painter',
      },
      {
        text: 'Paint Tool SAI',
        value: 'Paint Tool SAI',
      },
    ]

    
    const selected = ref('')
    const subCategories = ref('')

    return { handleInput, categories, selected, subCategories, subCategoriesA, subCategoriesB, subCategoriesC, subCategoriesD}
  },
}
</script>

<style></style>
