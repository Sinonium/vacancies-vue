<template>
  <div class="container">
    <div class="signup">
      <div class="signup-title">
        <h2>Sign up to <strong>your account!</strong></h2>
        <form>
          <label>Name</label>
          <div>
            <input type="email" placeholder="Jennie Kim" required />
            <img src="@/assets/img/user.svg" alt="'Type your email" />
          </div>
          <label>Email</label>
          <div>
            <input type="email" placeholder="jennie@gmail.com" required />
            <img src="@/assets/img/email.jpg" alt="'Type your email" />
          </div>
          <label>Password </label>
          <div>
            <input type="email" placeholder="myPassword1234@#$" required />
            <img src="@/assets/img/password.svg" alt="'Type your password" />
          </div>

          <button>Sign Up</button>

          <span class="auth__have-account"
            >Already have an account? Login <a href="" target="blank"> Login</a>
          </span>
        </form>
      </div>
    </div>
  </div>
</template>













<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";

.signup {
  width: vw(700);
  height: vw(550);
  background-color: $greyBlue70;

  border-radius: 13em 0.5em/41em 0.5em;

  &-title {
    padding-left: vw(170);
  }
  h2 {
    @include font(vw(30), 400, vw(50));
    font-family: "San Francisco Pro";
    color: $greyBlue20;
    padding-top: vw(20);
    margin-left: vw(-10);
    strong {
      color: $greyBlue25;
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
      padding: vw(15) 0;
      background: $greyBlue50;
      box-shadow: 10px 10px 5px $greyBlue25;
      border-radius: vw(30);
      color: $white;
      outline: none;
      cursor: pointer;
      border: 2px solid $greyBlue60;
      transition: 0.3s;
      margin-top: vw(20);
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
        margin-top: vw(5);
        display: block;
        text-align: right;
        color: #adb8cc;
        width: 57%;
        margin-top: vw(10);
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .signup {
    width: vmin(250);
    height: vmin(250);
    background-color: $greyBlue70;
    border-radius: 13em 0.5em/41em 0.5em;
    &-title {
      padding-left: vmin(60);
    }
    h2 {
      @include font(vmin(15), 200, vmin(25));
      font-family: "San Francisco Pro";
      color: $greyBlue20;
      margin-left: vmin(7);
      strong {
        color: $greyBlue25;
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
  .signup {
    height: vmin(250);
    background-color: $greyBlue70;
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
      color: $greyBlue20;
      strong {
        color: $greyBlue25;
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