<template>
  <div>lalala</div>
  <div>
    <button @click="addLike()">Лайк</button>
    <button @click="addDislike()">Дизлайк</button>
    <div><strong>Кол-во лайков:</strong>{{ likes }}</div>
    <div><strong>Кол-во дизлайков:</strong>{{ dislikes }}</div>
  </div>
</template>

<script>
export default {
  setup() {
    let likes = ref(0)
    let dislikes = ref(0)
    const addLike = () => {
      likes.value += 1
      console.log(counter)
    }

    const addDislike = () => {
      dislikes.value += 1
      console.log(counter)
    }

    return { likes, dislikes, addLike, addDislike }
  },
}
</script>

<style></style>
