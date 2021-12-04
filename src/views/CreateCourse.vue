<template>
  <form class="admin-board">
     
          <h3 class="admin-board__heading">New Course Creation</h3>
          <div class="create-course">
          <div class="create-course__name">
              <h4 class="create-course__title">Name of the course</h4>
              <p class="create-course__instruction">Write the name of your course. The name should attract attention and reflect the essence of the course.</p>
              <label></label>
              <input type="text" v-model="name">
              <span class="quantity">3/100 Characters (minimum 5)</span>
              <p class="create-course__title">Some good examples:</p>
              <div class="create-course__examples">
              <span>Technical Design</span>
              <span>Web development</span>
              <span>Create 2d Animations</span>
              </div>
          </div>
          </div>

          <div class="create-course">
              <div class="create-course__description">
                  <h4 class="create-course__title">Course Description</h4>

                  <div class="create-course__questions">

                  <div class="questions">
                  <p>
                      <span></span>
                      What tasks will the work be used for?
                  </p>
                  </div>

                  <div class="questions">
                  <p>
                      <span></span>
                      What users is your product targeted to?
                  </p>
                  </div>

                  <div class="questions">
                  <p>
                      <span></span>
                      What criteria will you evaluate the result of work?
                      </p>
                  </div>
                  </div>
        
                  <textarea name="comment" cols="40" rows="3" placeholder="Tell us in detail about your course"></textarea>
                  <span class="quantity">3/100 Characters (minimum 5)</span>
                  <p class="create-course__title">Photo of your course</p>
                  <p class="create-course__instruction">Write the URL:</p>
                  <input type="text" placeholder="https://drive.google.com/uc?export=view&id=1B5ZusvPN1mH91omnBkzilaJL8PkWC08e" v-model="imageURL">

                  <h4 class="create-course__title">What will the student study?</h4>
                  <input type="text" v-model="themes">

                  <h4 class="create-course__title">Who this course is for:</h4>
                  <input type="text">

                  <h4 class="create-course__title">About Teacher</h4>
                  <p class="create-course__instruction">Type the name of the teacher</p>
                  <input type="text" v-model="teacher">
              </div>
          </div>

          <div class="create-course">
              <div class="create-course__price">
                  <h4 class="create-course__title">Price:</h4>
                  <input type="text" placeholder="100$" v-model="price">
              </div>
          </div>

          <div class="create-course">
              <div class="create-course__categories">
                  <h4 class="create-course__title">Project Categories</h4>
                  <div class="category-blocks">

                  <div class="category-block">
                  <p class="title">Web Development</p>
                  <p class="category">Website Design</p>
                  <p class="category">Layout</p>
                  <p class="category">Web programming</p>
                  <p class="category">Fully Website Dev</p>
                  <p class="more">More</p>
                  </div>

                  <div class="category-block">
                  <p class="title">Web Development</p>
                  <p class="category">Website Design</p>
                  <p class="category">Layout</p>
                  <p class="category">Web programming</p>
                  <p class="category">Fully Website Dev</p>
                  <p class="more">More</p>
                  </div>

                  <div class="category-block">
                  <p class="title">Web Development</p>
                  <p class="category">Website Design</p>
                  <p class="category">Layout</p>
                  <p class="category">Web programming</p>
                  <p class="category">Fully Website Dev</p>
                  <p class="more">More</p>
                  </div>

                  <div class="category-block">
                  <p class="title">Web Development</p>
                  <p class="category">Website Design</p>
                  <p class="category">Layout</p>
                  <p class="category">Web programming</p>
                  <p class="category">Fully Website Dev</p>
                  <p class="more">More</p>
                  </div>
                  </div>
                 
              </div>
          </div>

          <div class="create-course">
              <div class="create-course__lectures">
                  <h4 class="create-course__title">Course Content</h4>
                  
                  <p class="create-course__instruction">Type the name of the lecture:</p>
                  <input type="text" placeholder="JavaScript Foundation">

                  <p class="create-course__instruction">Type the name of the lesson:</p>
                  <input type="text" placeholder="How To Succedd In This Course">

                  <p class="create-course__instruction">URL of the video:</p>
                  <input type="text" placeholder="https://www.youtube.com/watch?v=aLb2xdSgpF4" v-model="videoURL">
              </div>
          </div>
          
          <div class="publish">
              <button @click="handleSubmit">Publish Course</button>
              </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
setup() {
    const name = ref("");
    const price = ref("");
    const videoURL = ref("");
    const imageURL = ref("");
    const themes = ref("");
    const teacher = ref("");
    const handleSubmit = async () => {
        try{
            const newCourse = {
                name: name.value,
                price: price.value,
                videoURL: videoURL.value,
                imageURL: imageURL.value,
                themes: themes.value,
                teacher: teacher.value
            }
            await fetch('http://localhost:3000/courses', 
            {method: "POST", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCourse)
            })
        }
        catch(err){
           console.log(err)
        }
    }
    return { handleSubmit, name, price, videoURL, imageURL, teacher}
}
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';

.admin-board{
    margin: vw(30) vw(100);
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
    .create-course{
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
            }
            
            .quantity{
                @include font(vw(10), 700, vh(20));
                color: $greyBlue80;
                margin-left: vw(460);
            }
            input{
                border: 2px solid #F5F6F7;
                box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
                border-radius: vw(5);
                padding: vw(16) vw(10) vw(16) vw(15);
                width: vw(600);
                margin: 0 0 vw(15) 0;
            }
            &__examples{
                span{
                    @include font(vw(12), 700, vh(20));
                    color: $greyBlue70;
                    background: $greyBlue98;
                    border-radius: vw(5);
                    padding: vw(20) vw(10);
                    margin: 0 0 0 vw(15);
                }
            }
            .examples{
                @include font(vw(13),700, vw(25));
                color: $greyBlue70;
            }
            &__description{
                textarea{
                    border: 2px solid #F5F6F7;
                    box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
                    border-radius: vw(5);
                    width: vw(605);
                    height: vw(120);
                    resize: none;
                    @include font(vw(13), 600, vh(30));
                }
            }
            &__questions{
                display: block;
                margin-bottom: vw(20);
                .questions{
                    display: flex;
                    p{
                    @include font(vw(13), 700, vh(25));
                    color: $greyBlue70;
                    }
                    span{
                    display: inline-flex;
                    margin: vw(3) vw(10);
                    width: 15px;
                    height: 2px;
                    content: ' ';
                    background-color:  $greyBlue90;
                }
                }
            }
            &__categories{
                .category-blocks{
                    display: flex;
                    .category-block{
                    display: block;
                    margin: 0 vw(40) 0 0;
                    .title{
                        @include font(vw(13),700, vh(25));
                        color: $greyBlue50;
                        margin-bottom: vw(20);
                    }
                    .category{
                    @include font(vw(12),700,vh(20));
                    color: $greyBlue70;
                    }
                    .category:hover{
                        color: $green;
                    }
                    .more{
                    @include font(vw(12),700, vh(20));
                    color: $blue;
                    margin-top: vw(20);
                }
                }
                }
            }
    }
}
@media screen and (max-width: 1024px) {
.admin-board{
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
    .create-course{
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
            .quantity{
                @include font(vmin(8), 700, vmin(10));
                margin-left: vmin(115);
            }
            input{
                border-radius: vmin(5);
                padding: vw(10);
                margin: 0 0 vmin(15) 0;
                width: vmin(220);
            }
            &__examples{
                span{
                    @include font(vmin(6), 700, vmin(10));
                    border-radius: vmin(5);
                    padding: vmin(3);
                    margin: 0 0 0 vmin(6);
                }
            }
            .examples{
                @include font(vmin(6),700, vmin(13));
            }
            &__description{
                textarea{
                    border-radius: vmin(5);
                    width: vmin(180);
                    height: vmin(60);
                    @include font(vmin(6), 600, vmin(15));
                }
            }
            &__questions{
                margin-bottom: vmin(10);
                .questions{
                    p{
                    @include font(vmin(7), 700, vmin(13));
                    }
                    span{
                    margin: vmin(3) vmin(5);
                    width: vmin(6);
                    height: vmin(2);
                }
                }
            }
            &__categories{
                .category-blocks{
                    .category-block{
                    margin: 0 vmin(5) 0 0;
                    .title{
                        @include font(vmin(7),600, vh(13));
                        margin-bottom: vmin(7);
                    }
                    .category{
                    @include font(vmin(6),600,vmin(10));
                    }
                    .more{
                    @include font(vmin(6),700, vh(10));
                    margin-top: vmin(10);
                    color: $blue;
                }
                }
                }
            }
    }
}
}
</style>