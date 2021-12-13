<template>
  <section class="Details-about__teach">
    <CartTeach
      :moreInfo="moreInfo"
      v-if="teacherInfo"
      :teacherInfo="teacherInfo"
    />
    <CartCourseRating :moreInfo="moreInfo" :course="course" />
    <BlockReviews :moreInfo="moreInfo" :course="course" />
  </section>
</template>

<script>
import CartTeach from './CartTeach/CartTeach.vue'
import CartCourseRating from '../DetailsAboutTeach/CartRating/CartCourseRating.vue'
import BlockReviews from './BlockReviews/BlockReviews.vue'
import getDocument from '@/composables/getDocument'
import { computed, onMounted, ref } from '@vue/runtime-core'
export default {
  components: { CartTeach, CartCourseRating, BlockReviews },
  props: ['moreInfo'],
  setup(props) {
    const teacherInfo = ref()

    const getTeacher = async () => {
      console.log(props.moreInfo.teacherId)
      const { documents } = await getDocument('users', props.moreInfo.teacherId)
      teacherInfo.value = documents.value
    }

    onMounted(() => {
      getTeacher()
    })

    return {
      teacherInfo,
      getTeacher,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.Details-about__teach {
  margin-top: vw(30);
}
@media screen and (max-width: 551px) {
  .Details-about__teach {
    margin-left: vmin(1);
    margin-top: vmin(30);
  }
}
</style>
