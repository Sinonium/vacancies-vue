<template>
  <div class="admin-board">
      <div class="container">
          <h3 class="admin-board__heading">New Project Creation</h3>
          <div class="create-course">
          <div class="create-course__name">
              <h4 class="create-course__title">Name of the project</h4>
              <p class="create-course__instruction">Write the name of your project. The name should attract attention and reflect the essence of the project.</p>
              <label></label>
              <input type="text"  placeholder="Name of the project">
              <span class="quantity">3/100 Characters (minimum 5)</span>
              <p class="create-course__title">Some good examples:</p>
              <div class="create-course__examples">
              <span>Technical Design</span>
              <span>We are looking for a Website Promotion Specialist</span>
              <span>Create 2d Animations</span>
              </div>
          </div>
          </div>

          <div class="create-course">
              <div class="create-course__description">
                  <h4 class="create-course__title">Project Description</h4>

                  <div class="create-course__questions">
    
                  <span></span>
                  <p class="create-course__instruction">What tasks will the work be used for?</p>
                  <span></span>
                  <p class="create-course__instruction">What users is your product targeted to?</p>
                  <span></span>
                  <p class="create-course__instruction">What criteria will you evaluate the result of work?</p>
                  </div>
        
                  <textarea name="comment" cols="40" rows="3" placeholder="Tell us in detail about your project"></textarea>
                  <span class="quantity">3/100 Characters (minimum 5)</span>
                  <p class="create-course__title">Project Files</p>
                  <p class="create-course__instruction">Write the name of your project. The name should attract attention and reflect the essence of the project.</p>
              </div>
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
                
                span{
                    display: flex;
                    width: 15px;
                    height: 2px;
                    content: ' ';
                    background-color:  $greyBlue90;
                }
            }
    }
}
</style>