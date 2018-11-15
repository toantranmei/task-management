<template>
  <!-- ============================================================== -->
  <!-- Login box.scss -->
  <!-- ============================================================== -->
  <div class="auth-wrapper d-flex no-block justify-content-center align-items-center" v-bind:style="{ background: 'url(' + images.background + ') no-repeat center center' }">
      <div class="auth-box">
          <div>
              <div class="logo">
                  <span class="db"><img :src="images.headerform" alt="logo" /></span>
                  <h5 class="font-medium m-b-20">Sign Up to Admin</h5>
              </div>
              <!-- Form -->
              <div class="row">
                  <div class="col-12">
                      <form class="form-horizontal m-t-20">
                          <div class="form-group row ">
                              <div class="col-12 ">
                                  <input class="form-control form-control-lg" 
                                    type="text" 
                                    required=" " 
                                    placeholder="Name"
                                    v-model="nameUser">
                              </div>
                          </div>
                          <div class="form-group row">
                              <div class="col-12 ">
                                  <input class="form-control form-control-lg" 
                                    type="text" 
                                    required=" " 
                                    placeholder="Email"
                                    v-model="emailUser">
                              </div>
                          </div>
                          <div class="form-group row">
                              <div class="col-12 ">
                                  <input class="form-control form-control-lg" 
                                    type="password" 
                                    required=" " 
                                    placeholder="Password"
                                    v-model="password">
                              </div>
                          </div>
                          <div class="form-group row">
                              <div class="col-12 ">
                                  <input class="form-control form-control-lg" 
                                  type="password" 
                                  required=" " 
                                  placeholder="Confirm Password"
                                  v-model="rpassword">
                              </div>
                          </div>
                          <div class="form-group row">
                              <div class="col-md-12 ">
                                  <div class="custom-control custom-checkbox">
                                      <input type="checkbox" class="custom-control-input" id="customCheck1">
                                      <label class="custom-control-label" for="customCheck1">I agree to all <a href="javascript:void(0)">Terms</a></label>
                                  </div>
                              </div>
                          </div>
                          <div class="form-group text-center ">
                              <div class="col-xs-12 p-b-20 ">
                                  <button class="btn btn-block btn-lg btn-info " 
                                    type="submit "
                                    @click.prevent="register">SIGN UP</button>
                              </div>
                          </div>
                          <div class="form-group m-b-0 m-t-10 ">
                              <div class="col-sm-12 text-center ">
                                  Already have an account? 
                                  <a href="#" 
                                    class="text-info m-l-5 "
                                    ><router-link :to="{ name: 'login' }"><b>Sign In</b></router-link></a>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- ============================================================== -->
  <!-- Login box.scss -->
  <!-- ============================================================== -->
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
  data() {
    return {
      images: {
        background: require('@/assets/plugins/images/big/auth-bg.jpg'),
        headerform: require('@/assets/plugins/images/logo-icon.png')
      },
      nameUser: '',
      emailUser: '',
      password: '',
      rpassword: ''
    };
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async register() {
      const response = await AuthenticationService.register({
        nameUser: this.nameUser,
        emailUser: this.emailUser,
        password: this.password
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
