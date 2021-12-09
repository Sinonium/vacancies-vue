<template>
  <form class="become-teacher" @submit.prevent="handleSubmit()">
     
          <h3 class="create-teacher__title">Become a Teacher</h3>
          <div class="create-teacher">
            <div class="create-teacher__name">
                <h4 class="create-teacher__title">Make sure your name is correct</h4>
                <input onkeyup="this.value=this.value.replace(/^\s/,'')" type="text" v-model="name">

                <h4 class="create-teacher__title">Write your skills</h4>
                <input onkeyup="this.value=this.value.replace(/^\s/,'')" type="text" placeholder="Software Developer, Architect, and UX Designer" v-model="skills">

            </div>
          </div>

          <div class="create-teacher">
              <div class="create-teacher__description">

                    <h4 class="create-teacher__title">Enter your education information (university, courses, internships ...)</h4>
                  <textarea onkeyup="this.value=this.value.replace(/^\s/,'')" name="comment" cols="40" rows="3" placeholder="Your education" v-model="education"></textarea>


                  <h4 class="create-teacher__title">Your photo</h4>
                  <p class="create-teacher__instruction">Paste the URL:</p>
                  <input class="url-input" type="text" placeholder="https://ibb.co/Tm5dJbY" v-model="imageURL">
                    <p class="create-teacher__instruction">To get the URL click <a href="https://ru.imgbb.com/">here</a>.</p>
                  

                  <h4 class="create-teacher__title">Write a little about yourself (work, hobby ...)</h4>
                  <textarea onkeyup="this.value=this.value.replace(/^\s/,'')" name="comment" cols="40" rows="3" placeholder="This is an optional field for information about yourself" v-model="description"></textarea>
              </div>
          </div>

          <div class="publish">
              <button>Save</button>
            </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  components: {  },
setup() {


    const skills = ref("");
    const name = ref("");
    const imageURL = ref("");
    const description = ref("");

    
    

    return {name, skills,imageURL, description }
}
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';

.become-teacher{
    margin: vw(30) vw(160);
    width: vw(760);
    &__heading{
        @include font(vw(16),700, vh(30));
        color: $greyBlue60;
    }
    
    .publish{
        margin: 0 vw(30);
        button{
        @include font(vw(14),600, vh(30));
        color: white;
        background-color: $blue;
        width: vw(200);
        height: vw(60);
        border: none;
        border-radius: vw(10);
        }               
    }
    .create-teacher{
        margin: vw(30) 0;
        padding: vw(60);
        background: $white;
        box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
        border-radius: vw(10);
            &__title{
            @include font(vw(16), 700, vw(30));
            color: $greyBlue50;
            }
            &__instruction{
            @include font(vw(13), 700, vh(25));
            color: $greyBlue70;
            margin: vw(30) 0 vw(20) 0;
            a{
                text-decoration-color:  $greyBlue50;
                color: $greyBlue50;
            }
            }
            .url-input{
                text-transform: initial;  
            }
            input{
                border: 2px solid #F5F6F7;
                box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
                border-radius: vw(5);
                padding: vw(16) vw(10) vw(16) vw(15);
                width: vw(600);
                margin: 0 0 vw(15) 0;
                text-transform: capitalize;  
                @include font(vw(13), 600, vh(30)); 
            }
            &__description{
                textarea{
                    border: 2px solid #F5F6F7;
                    box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
                    padding: vw(16) vw(10) vw(16) vw(15);
                    border-radius: vw(5);
                    width: vw(605);
                    height: vw(120);
                    resize: none;
                    @include font(vw(13), 600, vh(30));
                }
            }
    }
}
@media screen and (max-width: 1024px) {

.become-teacher{
    margin: vmin(15) vmin(40);
    &__heading{
        @include font(vmin(15),700, vmin(15));
    }
    .publish{
        margin: 0 vmin(15);
        button{
        @include font(vmin(7),600, vmin(15));
        color: white;
        width: vmin(100);
        height: vmin(30);
        border-radius: vmin(10);
        }   
    }
    .create-teacher{
        margin: vmin(15) 0;
        padding: vmin(15);
        width: vmin(230);
        border-radius: vmin(5);
            &__title{
            @include font(vmin(10), 700, vmin(13));
            }
            &__instruction{
            @include font(vmin(7), 700, vmin(13));
            margin: vmin(15) 0 vmin(10) 0;
            }
            input{
                border-radius: vmin(5);
                padding: vw(10);
                margin: 0 0 vmin(15) 0;
                width: vmin(220);
                 @include font(vmin(7), 600, vmin(15)); 
            }
            &__description{
                textarea{
                    border-radius: vmin(5);
                    width: vmin(180);
                    height: vmin(60);
                    @include font(vmin(6), 600, vmin(15));
                }
            }
    }
}
}
</style>