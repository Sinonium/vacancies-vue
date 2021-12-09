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
    v-if="selected === 'Web Development'"
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
    v-if="selected === 'Game Development'"
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
    v-if="selected === 'Mobile Apps'"
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
    v-if="selected === 'Programming Languages'"
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
  v-if="selected === 'Databases'" 
  name="" id="" v-model="subCategories">
    <option
      v-for="option in subCategoriesE"
      :key="option.text"
      :value="option.value"
    >
      {{ option.text }}
    </option>
  </select>

  <select
  @change="handleInput"
    v-if="selected === 'Software Testing'"
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

  <select
  @change="handleInput"
    v-if="selected === 'Software Engineering'"
    name=""
    id=""
    v-model="subCategories"
  >
    <option
      v-for="option in subCategoriesG"
      :key="option.text"
      :value="option.value"
    >
      {{ option.text }}
    </option>
  </select>

  <select
  @change="handleInput"
    v-if="selected === 'Development Tools'"
    name=""
    id=""
    v-model="subCategories"
  >
    <option
      v-for="option in subCategoriesH"
      :key="option.text"
      :value="option.value"
    >
      {{ option.text }}
    </option>
  </select>

  <select
    @change="handleInput"
    v-if="selected === 'E-Commerce'"
    name=""
    id=""
    v-model="subCategories"
  >
    <option
      v-for="option in subCategoriesI"
      :key="option.text"
      :value="option.value"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup(props, context) {
    const handleInput = () => {
      console.log(selected.value);
      console.log(subCategories.value);
      context.emit('selectedCates', selected.value, subCategories.value)
    };
    const categories = [
      {
        text: "Web Development",
        value: "Web Development",
      },
      {
        text: "Game Development",
        value: "Game Development",
      },
      {
        text: "Mobile Apps",
        value: "Mobile Apps",
      },
      {
        text: "Programming Languages",
        value: "Programming Languages",
      },
      {
        text: "Databases",
        value: "Databases",
      },
      {
        text: "Software Testing",
        value: "Software Testing",
      },
      {
        text: "Software Engineering",
        value: "Software Engineering",
      },
      {
        text: "Development Tools",
        value: "Development Tools",
      },
      {
        text: "E-Commerce",
        value: "E-Commerce",
      },
    ];

    const subCategoriesA = [
      {
        text: "Javascript",
        value: "Javascript",
      },
      {
        text: "React",
        value: "React",
      },
      {
        text: "Vue",
        value: "Vue",
      },
      {
        text: "Angular",
        value: "Angular",
      },
      {
        text: "HTML/CSS",
        value: "HTML/CSS",
      },
    ];

    const subCategoriesB = [
      {
        text: "Unreal Engine",
        value: "Unreal Engine",
      },
      {
        text: "Unity",
        value: "Unity",
      },
      {
        text: "CryEngine",
        value: "CryEngine",
      },
    ];

    const subCategoriesC = [
      {
        text: "Java",
        value: "Java",
      },
      {
        text: "Kotlin",
        value: "Kotlin",
      },
      {
        text: "Swift",
        value: "Swift",
      },
      {
        text: "Objective-C",
        value: "Objective-C",
      },
    ];

    const subCategoriesD = [
      {
        text: "Python",
        value: "Python",
      },
      {
        text: "Java Script",
        value: "Java Script",
      },
      {
        text: "C#",
        value: "C#",
      },
      {
        text: "Go",
        value: "Go",
      },
    ];

    const subCategoriesE = [
      {
        text: "R",
        value: "R",
      },
      {
        text: "Python",
        value: "Python",
      },
      {
        text: "SQL",
        value: "SQL",
      },
      {
        text: "Scala",
        value: "Scala",
      },
    ];

    const subCategoriesF = [
      {
        text: "«black-box» testing",
        value: "«black-box» testing",
      },
      {
        text: "«white-box» or «glass-box» testing",
        value: "«white-box» or «glass-box» testing",
      },
    ];

    const subCategoriesG = [
      {
        text: "Object oriented programming",
        value: "Object oriented programming",
      },
      {
        text: "Analysis of algorithms",
        value: "Analysis of algorithms",
      },
      {
        text: "Computer graphics",
        value: "Computer graphics",
      },
      {
        text: "Cryptography",
        value: "Cryptography",
      },
    ];

    const subCategoriesH = [
      {
        text: "GitHub",
        value: "GitHub",
      },
      {
        text: "FileZilla",
        value: "FileZilla",
      },
      {
        text: "Rescue Time",
        value: "Rescue Time",
      },
      {
        text: "Asana",
        value: "Asana",
      },
    ];

    const subCategoriesI = [
      {
        text: "B2C / B2B / C2C",
        value: "B2C / B2B / C2C",
      },
      {
        text: "M-commerce",
        value: "M-commerce",
      },
      {
        text: "F-commerce",
        value: "F-commerce",
      },
    ];

    const selected = ref("");
    const subCategories = ref("");

    return {
      handleInput,
      categories,
      selected,
      subCategories,
      subCategoriesA,
      subCategoriesB,
      subCategoriesC,
      subCategoriesD,
      subCategoriesE,
      subCategoriesF,
      subCategoriesG,
      subCategoriesH,
      subCategoriesI,
    };
  },
};
</script>
