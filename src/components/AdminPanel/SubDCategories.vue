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
    v-if="selected === 'Software'"
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
    v-if="selected === 'SystemSoftware'"
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
    v-if="selected === 'Application Software'"
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
    v-if="selected === 'Operating System'"
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
  @change="handleInput"
    v-if="selected === 'OS Types'"
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
  setup(props,context) {
    const handleInput = () => {
      console.log(selected.value);
      console.log(subCategories.value);
      context.emit('selectedCates', selected.value, subCategories.value)
    };
    const categories = [
      {
        text: 'Software',
        value: 'Software',
      },
      {
        text: 'SystemSoftware',
        value: 'SystemSoftware',
      },
      {
        text: 'Application Software',
        value: 'Application Software',
      },
      {
        text: 'Operating System',
        value: 'Operating System',
      },
      {
        text: 'OS Types',
        value: 'OS Types',
      }
    ]
    


    const subCategoriesA = [
      {
        text: 'System programmers',
        value: 'System programmers',
      },
      {
        text: 'Applied programmers',
        value: 'Applied programmers',
      },
      {
        text: 'Network administrators',
        value: 'Network administrators',
      },
      {
        text: 'Database administrators',
        value: 'Database administrators',
      }
    ]

    const subCategoriesB = [
      {
        text: 'Creation of an operating environment',
        value: 'Creation of an operating environment',
      },
      {
        text: 'Diagnostics',
        value: 'Diagnostics',
      },
      {
        text: 'Auxiliary TP',
        value: 'Auxiliary TP',
      },
      {
        text: 'Equipment prevention',
        value: 'Equipment prevention',
      },
    ]

    const subCategoriesC = [
      {
        text: 'Data processing',
        value: 'Data processingy',
      },
      {
        text: 'Specialized software',
        value: 'Specialized software',
      },
      {
        text: 'System programmers',
        value: 'System programmers',
      },
      {
        text: 'Applied programmers',
        value: 'Applied programmers',
      },
    ]

    const subCategoriesD = [
      {
        text: 'Software operation management',
        value: 'Software operation management',
      },
      {
        text: 'Program execution control',
        value: 'Program execution control',
      },
      {
        text: 'Storage of information',
        value: 'Storage of information',
      },
      {
        text: 'Interface support',
        value: 'Interface support',
      },
    ]

    const subCategoriesE = [
      {
        text: 'Multitasking OS',
        value: 'Multitasking OS',
      },
      {
        text: 'Multiuser OS',
        value: 'Multiuser OS',
      },
      {
        text: 'Offline and network OS',
        value: 'Offline and network OS',
      },
      {
        text: 'Multitasking mode',
        value: 'Multitasking mode',
      },
    ]

    
    const selected = ref('')
    const subCategories = ref('')

    return { handleInput, categories, selected, subCategories, subCategoriesA, subCategoriesB, subCategoriesC, subCategoriesD, subCategoriesE}
  },
}
</script>

<style></style>
