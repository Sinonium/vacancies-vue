<template>
  <div class="row">
        <div class="col-3">
                <div class='course-item' v-for="course in courses" :key="course.id" :course="course">
			        <div class='course-item__header'>
				      <img class='course-item__image' src="./../assets/img/course-1.jpg" alt='course' />
				    <div class='course-item__time'>
					  <img src="./../assets/img/clock.svg" alt='time' />
					  <span>{{course.time}} hours</span>
				    </div>
                    
				    <div class="course-item__like">
                      <img src="./../assets/img/like.svg" alt="like">
				    </div>
                    </div>
                    <div className='curse-item__bottom'>
                        <div className='course-item__info'>
                          <h3 className='course-item__name'>{{course.name}}</h3>
                            <div className='course-item__rating'>
                                <img src="./../assets/img/star.svg" alt='rating' />
                                <img src="./../assets/img/star.svg" alt='rating' />
                                <img src="./../assets/img/star.svg" alt='rating' />
                                <img src="./../assets/img/star.svg" alt='rating' />
                                <img src="./../assets/img/star.svg" alt='rating' />
                                <span class="grade">{{course.grade}}</span>
                                <span class="studens">{{course.students}}</span>
                            </div>
                            <div className='course-item__details'>
                              <p class="teacher's-name">{{course.teacher}}</p>
                              <span class="price">${{course.price}}</span>
                            </div>  
                        </div>
                    </div>
            </div>
		</div>
 </div>
 
    
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export default {
    props: ['course'],
    setup() {
        const courses = ref([]);

        const getCourseAPI = async () => {
            const response = await fetch('http://localhost:3000/courses');
            const jsonCourses = await response.json();
            courses.value = jsonCourses
        }
        
        onMounted(() => {
            getCourseAPI();
        });

        return{ courses }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
.row{
    display: flex;
    margin: vw(500) vw(80) 0 vw(410);
    .col-3{
        display: flex;
        flex-wrap: wrap;
        min-width: vw(1120);
        .course-item{
            margin: vw(15) vw(15);
            width: vw(250);
            background: #FFFFFF;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
            &__header{
                display: flex;
                justify-content: space-between;
                position: relative;
                padding: vw(20);
                height: vw(180);
                z-index: 1;
            }
            &__image{
                position: absolute;
                left: 0;
                top: 0;
                width: vw(250);
                height: vw(190);
                z-index: -1;
            }
            &__time{
                display: flex;
                align-items: center;
                background: rgba(0, 0, 0, 0.5);
                border-radius: vw(30);
                padding: vw(10) vw(20);
                max-height: vw(30);
                span {
                    @include font(vw(12), 700, vh(20));
                    margin-left: vw(10);
                    color: $white;
                }
                img {
                    width: vw(16);
                    height: vw(16);
                }
            }
            &__like{
                width: vw(50);
                height: vw(50);
                background: rgba(0, 0, 0, 0.5);
                border-radius: 50%;
                cursor: pointer;
                z-index: 1;
                img {
                    padding: vw(17);
                    width: vw(16);
                    height: vw(16);
                }
            }
            &__info{
                padding: 0 vw(20);
            } 
            &__name{
                @include font(vw(13),700,vh(25));
                color: #6B7A99;
                margin-bottom: vw(10);
            }
            &__rating {
                margin: vw(19) 0;

                img {
                width: vw(12);
                height: vw(12);
                }
                span {
                @include font(vw(12), 700,vh(20));
                margin-left: vw(14);
                color: #4D5E80;
                }
            }
            &__details {
                display: flex;
                justify-content: space-between;
                p{
                    @include font(vw(12),700, vh(20));
                    color: #7D8FB3;
                }
                span{
                    margin-top: vw(8);
                    @include font(vw(14),700,vh(30));
                    color: #6B7A99;

                }
            }
            
        }
    }
}
</style>
