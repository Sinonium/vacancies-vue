<template>
  <div class="container">
    <div class="login">
      <div class="login-title">
        <h2>Register and <strong>start learning!</strong></h2>
        <form @submit.prevent="handleSubmit">
          <label>Email</label>
          <div>
            <input type="email" placeholder="jennie@gmail.com" required v-model="email"/>
            <img src="@/assets/img/email.jpg" alt="'Type your email" />
          </div>
          <label>Password </label>
          <div>
            <input type="password" placeholder="myPassword1234@#$" required v-model="password" />
            <img src="@/assets/img/password.svg" alt="'Type your password" />
          </div>

          <button>Login</button>

          <span class="auth__have-account"
            >Don’t have an account? <router-link to="/signup"> Sign Up </router-link>
          </span>
        </form>
      </div>
    </div>
  </div>
</template>



<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import useAuth from '@/composables/useAuth'
export default {
  setup(){
    const email = ref("");
    const password = ref("");
    const router= useRouter()


    const handleSubmit = async () => {
      const {login} = useAuth()

      try {
        const user = await login(email.value, password.value)

        console.log(user.value);

        router.push("/")
      }
      catch (err) {
        console.log(err);
      }
    }

    return {
      email,
      password,
      handleSubmit
    }
  }
};
</script>







<style lang="scss">
@import "@/assets/scss/index.scss";

.login {
  width: vw(700);
  height: vw(450);
  background-color: $greyBlue25;
  margin-left: vw(200);
 border-radius: 30em /20em;

  &-title {
    padding-left: vw(190);
  }
  h2 {
    @include font(vw(30), 400, vw(50));
    font-family: "San Francisco Pro";
    color: $greyBlue70;
    padding-top: vw(40);
    margin-left: vw(-10);
    strong {
      color: $greyBlue80;
    }
  }
  label {
    width: 53%;
    @include font(vw(12), 700, vw(20));
    color: $white;
    display: flex;
    justify-content: space-between;
    margin-bottom: vw(5);
    padding-left: vw(25);
    span {
      color: #adb8cc;
    }
  }
  form {
    div {
      width: 50%;
      display: flex;
      align-items: center;
      background: $white;
      margin-top: vw(5);
      border: 2px solid #f5f6f7;
      box-shadow: 10px 10px 5px $greyBlue25;
      border-radius: vw(30);
      padding: vw(15) vw(25);
      margin-bottom: vw(20);

      input {
        @include font(vw(12), 700, vw(20));
        width: 100%;
        padding-right: vw(10);
        border: none;
        outline: none;
        color: $greyBlue70;
      }
    }
    button {
      @include font(vw(12), 800, vw(20));
      width: 60%;
      padding: vw(1) 0;
      background: $greyBlue50;
      box-shadow: 10px 10px 5px $greyBlue25;
      border-radius: vw(30);
      color: $white;
      outline: none;
      cursor: pointer;
      border: 2px solid $greyBlue60;
      transition: 0.3s;
      margin-top: vw(20);
        margin-left: vw(5);
      &:hover {
        background-color: $greyBlue25;
        color: $white;
        border: 2px solid $greyBlue50;
        box-shadow: 0 3px 20px 0 $greyBlue80;
      }
    }

    span {
      padding-top: vw(5);
      display: block;
    }
    .auth {
      &__have-account {
        @include font(vw(12), 700, vw(20));
   
        display: block;
        text-align: right;
        color: #adb8cc;
        width: 57%;
        margin-top: vw(-10);
       margin-left: vw(-50);
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .login {
    width: vmin(250);
    height: vmin(200);
    background-color: $greyBlue25;
    border-radius: 13em 0.5em/41em 0.5em;
    &-title {
      padding-left: vmin(60);
    }
    h2 {
      @include font(vmin(15), 200, vmin(25));
      font-family: "San Francisco Pro";
      color: $greyBlue70;
      margin-left: vmin(7);
      strong {
        color: $greyBlue80;
      }
    }
    label {
      width: 53%;
      @include font(vmin(6), 700, vmin(10));
      color: $white;
      display: flex;
      justify-content: space-between;
      margin-bottom: vmin(5);
      padding-left: vmin(10);
      span {
        color: #adb8cc;
      }
    }
    form {
      div {
        width: 50%;
        display: flex;
        align-items: center;
        background: $white;
        margin-top: vmin(5);
        border: 2px solid #f5f6f7;
        box-shadow: 10px 10px 5px $greyBlue25;
        border-radius: vmin(20);
        padding: vmin(7) vmin(15);
        margin-bottom: vmin(5);

        input {
          @include font(vmin(7), 400, vmin(10));
          width: 100%;
          padding-right: vmin(5);
          border: none;
          outline: none;
          color: $greyBlue70;
        }
      }
      button {
        @include font(vmin(7), 400, vmin(10));
        width: 67%;
        padding: vmin(8) 0;
        background: $greyBlue50;
        box-shadow: 10px 10px 5px $greyBlue25;
        border-radius: vmin(15);
        color: $white;
        outline: none;
        cursor: pointer;
        border: 2px solid $greyBlue60;
        transition: 0.3s;
        margin-top: vmin(10);
        &:hover {
          background-color: $greyBlue25;
          color: $white;
          border: 2px solid $greyBlue50;
          box-shadow: 0 3px 20px 0 $greyBlue80;
        }
      }

      .auth {
        &__have-account {
          @include font(vmin(7), 150, vmin(10));
          margin-top: vmin(5);
          display: block;
          text-align: right;
          color: #adb8cc;
          width: 57%;
        }
      }
    }
  }
}

@media screen and (max-width: 377px) {
  .login {
    height: vmin(220);
    background-color: $greyBlue25;
    border-radius: 13em 0.5em/41em 0.5em;
    &-title {
      padding-left: vmin(50);
      img {
        width: vmin(10);
        height: vmin(10);
      }
    }
    h2 {
      @include font(vmin(15), 200, vmin(25));
      font-family: "San Francisco Pro";
      color: $greyBlue70;
      strong {
        color: $greyBlue80;
      }
    }
    label {
      width: 53%;
      @include font(vmin(6), 400, vmin(10));
      color: $white;
      display: flex;
      justify-content: space-between;
      margin-bottom: vmin(5);
      padding-left: vmin(25);
      span {
        color: #adb8cc;
      }
    }
    form {
      div {
        width: 50%;
        display: flex;
        align-items: center;
        background: $white;
        margin-top: vmin(5);
        border: 2px solid #f5f6f7;
        box-shadow: 10px 10px 5px $greyBlue25;
        border-radius: vmin(20);
        padding: vmin(4) vmin(10);
        margin-bottom: vmin(10);
        height: vmin(10);
        input {
          @include font(vmin(7), 400, vmin(10));
          width: 100%;
          padding-right: vmin(5);
          border: none;
          outline: none;
          color: $greyBlue70;
        }
      }
      button {
        @include font(vmin(7), 400, vmin(10));
        width: 62%;
        padding: vmin(8) 0;
        background: $greyBlue50;
        box-shadow: 10px 10px 5px $greyBlue25;
        border-radius: vmin(15);
        color: $white;
        outline: none;
        cursor: pointer;
        border: 2px solid $greyBlue60;
        transition: 0.3s;
        margin-top: vmin(10);
        height: vmin(10);
        &:hover {
          background-color: $greyBlue25;
          color: $white;
          border: 2px solid $greyBlue50;
          box-shadow: 0 3px 20px 0 $greyBlue80;
        }
      }

      span {
        padding-top: vmin(5);
        display: block;
      }
      .auth {
        &__have-account {
          @include font(vmin(7), 150, vmin(10));
          margin-top: vmin(5);
          display: block;
          text-align: center;
          color: #adb8cc;
          width: 57%;
          margin-top: vmin(5);
        }
      }
    }
  }
}
</style>