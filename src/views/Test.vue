<template>
        <div class="test">
          <div class="test-header">
            <h1 class="test-header__title">Find The Right Course for you</h1>
          </div>
          <div class="step-progress" :style="{'width':progress + '%'}"></div>
          <div class="questions" v-for="(question,index) in questions.slice(a,b)" :key="index" v-show="quiz">
              
              <div>
                <h2 class="questions__heading">Question {{b}}/{{questions.length}}</h2>
                <p class="question">{{question.question}}</p>
              </div>
              <div class="propositions">
                <ul class="answers">
                  <li class="answer" v-for="(proposition,index) in question.propositions" :key="index"  @click="selectResponse(proposition,index)" :class=" correct ? check(proposition) : ''"
                    >{{proposition.props}} 
                  </li>
                </ul>
              </div>
          </div>
          <div v-if="advice_show">
              <h2 class="advice">You should choose one of our programming courses</h2>
          </div>
          <div class="footer-quiz">
                <div v-if="progress < 100" class="box-button">
                    <button  @click="skipQuestion()" :style="next ? 'background-color: rgb(106, 128, 202)' : ''">Skip</button>
                    <button  @click="nextQuestion()" :style="!next ? 'background-color: rgb(106, 128, 202)' : ''">Next</button>
                </div>      
          </div>
        </div>
</template>

<script>


export default {
  data(){
    return{

      questions:[
        {
          question:"Which platform or field would you like to work in?",
          propositions:[
            {props:'Programming.',correct:true},
            {props:'Design and art.',},
            {props:'Finance & Accounting.',},
            {props:'Business.',},
            
            
          ]
        },
        {
          question: "Do you want to learn programming?",
          propositions:[
            {props:'No',correct:true},
            {props:'Not really',},
            {props:'I am interested.',},
            {props:'Yes, '},
            
          ]
          
        },
        {
          question:"What kind of company would you rather work for?",
          propositions:[
            {props:'Startup',},
            {props:'Corporate Company.',},
            {props:'Freelance',correct:true},
            {props:'Somewhere else',},
          ]
        },
        {
          question:"How are you with numbers?",
          propositions:[
            {props:'Amazing.',},
            {props:'Good'},
            {props:'Ok',correct:true},
            {props:'Bad',},
            
          ]
          
        },
        {
          question:"Do you like to learn new things?",
          propositions:[
            {props:"Of course!"},
            {props:'Not really.',},
            {props:'From time to time.',correct:true},
            {props:'I am pretty stuck in my ways.'},
            
          ]
          
        }
      ],
      a:0,
      b:1,
      next:true,
      advice_show:false,
      quiz:true,
      score:0,
      correct:false,
      progress:0,
      
    }
  },
  methods:{
    
    selectResponse(e){
      this.correct = true;
      this.next = false;
      if (e.correct) {
        this.score++;
      }

    },
    check(status){
        if (status.correct) {
          return 'correct'
        }else{
          return 'incorrect' 
        }
    },
    nextQuestion(){
      if (this.next) {
        return;
      }
      this.progress = this.progress + (100/this.questions.length);
      if(this.questions.length - 1 == this.a){
        this.advice_show = true;
        this.quiz = false;    
      }
      else{
        this.a++;
        this.b++;
        this.correct = false;
        this.next = true;
        
      }
      
    },
    skipQuestion(){
      if (!this.next) {
        return;
      }
      this.progress = this.progress + (100/this.questions.length);

      if(this.questions.length - 1 == this.a){
        this.advice_show = true;
        this.quiz = false;
        
        
      }else{
        this.a++;
        this.b++;
        
      }
      
    },    
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/index.scss';
.test{
  background-color: $white;
  margin: vw(30) vw(150);
  padding: vw(60);
  .test-header{
    &__title{
       @include font(vw(16), 700, vw(30));
      color: $greyBlue60;
    }
  }
  .step-progress {
    display: flex;
    width: 100%;
    height: 5px;
    background-color: $greyBlue50;
    transition: 0.5s;
  }
  .questions{
    padding: vw(20);
    &__heading{
        @include font(vw(18),700, vh(30));
        color: $greyBlue60;
    }
    .question{
      @include font(vw(14),600, vh(30));
      color:$greyBlue50;
    }
  }
  .propositions{
   .answers{
      text-decoration: none;
      @include font(vw(14),600, vh(30));
      color: $greyBlue25;
      .answer{
      @include font(vw(14),600, vh(30));
      color: $greyBlue70;
      padding: vw(5);
      border-radius: vw(5);
      list-style: none;
      }
      
   }
   
  }
  li.correct {
    border: 1px solid rgb(74, 219, 74);
    background-color: rgb(74, 219, 74);
    color: white;
    font-weight: 600;
  }
  .advice{
    margin: vw(30);
    @include font(vw(18),600, vh(30));
    color: $greyBlue50;
  }
}

@media screen and (max-width: 1024px) {
  .test{
  margin: vmin(15) vmin(50);
  padding: vmin(30);
  .test-header{
    &__title{
       @include font(vmin(8), 700, vmin(30));
    }
  }
  .questions{
    padding: vmin(10);
    &__heading{
        @include font(vmin(8),700, vmin(30));
    }
    .question{
      @include font(vmin(7),600, vmin(30));
    }
  }
  .propositions{
   .answers{
      @include font(vmin(7),600, vmin(30));
      .answer{
      @include font(vmin(7),600, vmin(30));
      padding: vmin(0 );
      }
   }
  }
  .advice{
    margin: vmin(15);
    @include font(vmin(9),600, vmin(30));
  }
}
}
</style>
