<template>
  <div class="admin-board">
      <div class="container">
          <h3 class="admin-board__heading">New Course Creation</h3>
          <div class="create-course">
          <div class="create-course__name">
              <h4 class="create-course__title">Name of the course</h4>
              <p class="create-course__instruction">Write the name of your course. The name should attract attention and reflect the essence of the course.</p>
              <label></label>
              <input type="text">
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

                  <div class="c">
                  <p>
                      <span></span>
                      What tasks will the work be used for?
                  </p>
                  </div>

                  <div class="c">
                  <p>
                      <span></span>
                      What users is your product targeted to?
                  </p>
                  </div>

                  <div class="c">
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
                  <input type="text" placeholder="https://drive.google.com/uc?export=view&id=1B5ZusvPN1mH91omnBkzilaJL8PkWC08e">

                  <h4 class="create-course__title">What will the student study?</h4>
                  <input type="text">

                  <h4 class="create-course__title">Who this course is for:</h4>
                  <input type="text">
              </div>
          </div>

          <div class="create-course">
              <div class="create-course__price">
                  <h4 class="create-course__title">Price:</h4>
                  <input type="text" placeholder="100$">
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
          
          <div class="publish">
              <button>Publish Course</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
.admin-board{
    margin: vw(20) vw(75);
    &__heading{
        @include font(vw(16),700, vh(30));
        color: $greyBlue60;
    }
    .publish{
        margin: vw(60) vw(60);
        button{
        @include font(vw(14),600, vh(30));
        color: white;
        background-color: $blue;
        padding: vw(33) vw(250);
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
            margin: vw(30) 0;
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
                padding: vw(16) vw(430) vw(16) vw(15);
                margin: vw(24) 0 vw(15) 0;
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
                }
            }
            &__questions{
                display: block;
                margin-bottom: vw(20);
                .c{
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
</style>