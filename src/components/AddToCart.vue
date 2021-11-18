<template>
   <div class="cart">
       <div class="">
            <div class="cart__video">
               <img src="../assets/img/logoReview.png" alt="video">
            </div>
            <div class="cart__price">
                <p>$24.90</p>
                <p>$78.99</p>
            </div>
            <div class="cart__text">
                 <span class="cart__text">This price is available for another 5 hours!</span>
            </div>
            <div class="cart__button">
                <button>Add To Cart</button>
                <button>Buy Now</button>
            </div>

            
       </div>
   </div>


</template>

<script>
export default {}
</script>


<style lang="scss">
@import '@/assets/scss/index.scss';
.container{
    min-width: vw(720);
    display: flex;

    &__price{
         display: flex;
     }
   
  }
</style>
