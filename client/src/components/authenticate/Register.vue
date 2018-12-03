<template>
  <div
    class="auth-wrapper d-flex no-block justify-content-center align-items-center"
    v-bind:style="{
      background: 'url(' + images.background + ') no-repeat center center'
    }"
  >
    <div class="auth-box">
      <div>
        <div class="logo">
          <span class="db"><img :src="images.headerform" alt="logo"/></span>
          <h5 class="font-medium m-b-20">Sign Up to Admin</h5>
        </div>
        <!-- Form -->
        <div class="row">
          <div class="col-12">
            <div class="alert alert-danger" v-if="errors.length">
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 class="text-danger">
                <i class="fa fa-exclamation-triangle"></i> Errors
              </h4>
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
            </div>
            <form class="form-horizontal m-t-20" method="POST">
              <div class="form-group row ">
                <div class="col-12 ">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    required=" "
                    placeholder="Name"
                    v-model="nameUser"
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-12 ">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    required=" "
                    placeholder="Email"
                    v-model="emailUser"
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-12 ">
                  <input
                    class="form-control form-control-lg"
                    type="password"
                    required=" "
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-12 ">
                  <input
                    class="form-control form-control-lg"
                    type="password"
                    required=" "
                    placeholder="Confirm Password"
                    v-model="rpassword"
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12 ">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                      v-model="statusAgree"
                    />
                    <label class="custom-control-label" for="customCheck1"
                      >I agree to all
                      <a href="javascript:void(0)">Terms</a></label
                    >
                  </div>
                </div>
              </div>
              <div class="form-group text-center ">
                <div class="col-xs-12 p-b-20 ">
                  <button
                    class="btn btn-block btn-lg btn-info "
                    :disabled="!statusAgree"
                    type="submit "
                    @click.prevent="register"
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
              <div class="form-group m-b-0 m-t-10 ">
                <div class="col-sm-12 text-center ">
                  Already have an account?
                  <a href="#" class="text-info m-l-5 "
                    ><router-link :to="{ name: 'login' }"
                      ><b>Sign In</b></router-link
                    ></a
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import * as types from "../../store/types";
export default {
  data() {
    return {
      images: {
        background: require("@/assets/images/big/auth-bg.jpg"),
        headerform: require("@/assets/images/logo-icon.png")
      },
      nameUser: "",
      emailUser: "",
      password: "",
      rpassword: "",
      errors: [],
      statusAgree: false
    };
  },
  methods: {
    checkForm() {
      this.errors = [];
      if (!this.nameUser) this.errors.push("Vui lòng nhập tên của bạn.");
      if (!this.emailUser) this.errors.push("Vui lòng nhập email của bạn.");
      else if (!this.validateEmail(this.emailUser))
        this.errors.push("Email không đúng định dạng!");
      if (!this.password && !this.rpassword)
        this.errors.push("Vui lòng nhập mật khảu của bạn");
      else if (this.password != this.rpassword)
        this.errors.push("Mật khẩu không trùng nhau. Vui lòng nhập lại!");
      console.log(this.errors);
    },
    validateEmail(email) {
      const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regularExpression.test(email);
    },
    async register() {
      try {
        const response = await AuthenticationService.register({
          nameUser: this.nameUser,
          emailUser: this.emailUser,
          password: this.password
        });
        this.$store.dispatch(types.ACTION_SET_TOKEN, response.data.token);
        this.$store.dispatch(types.ACTION_SET_USER, response.data.user);
        localStorage.setItem("token", response.data.token);
        this.$router.push({
          name: "dashboard"
        });
      } catch (error) {
        this.errors.push(error.response.data);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
