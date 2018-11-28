<template>
    <div class="auth-wrapper d-flex no-block justify-content-center align-items-center" v-bind:style="{ background: 'url(' + images.background + ') no-repeat center center' }">
        <div class="auth-box">
            <div id="loginform">
                <div class="logo">
                    <span class="db"><img :src="images.headerform" alt="logo" /></span>
                    <h5 class="font-medium m-b-20">Sign In</h5>
                </div>
                <!-- Form -->
                <div class="row">
                    <div class="col-12">
                        <div class="alert alert-danger" v-if="error" v-html="error" />
                        <form class="form-horizontal m-t-20" id="loginform">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="ti-user"></i></span>
                                </div>
                                <input type="text" 
                                  class="form-control form-control-lg" 
                                  placeholder="Username" 
                                  aria-label="Username" 
                                  aria-describedby="basic-addon1"
                                  v-model="emailUser">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon2"><i class="ti-pencil"></i></span>
                                </div>
                                <input type="password" 
                                  class="form-control form-control-lg" 
                                  placeholder="Password" 
                                  aria-label="Password" 
                                  aria-describedby="basic-addon1"
                                  v-model="password">
                            </div>
                            <div class="form-group text-center">
                                <div class="col-xs-12 p-b-20">
                                    <button class="btn btn-block btn-lg btn-info" 
                                      type="submit"
                                      @click.prevent="login">Log In</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                                    <div class="social">
                                        <a href="javascript:void(0)" class="btn  btn-facebook" data-toggle="tooltip" title="" data-original-title="Login with Facebook"> <i aria-hidden="true" class="fab  fa-facebook"></i> </a>
                                        <a href="javascript:void(0)" class="btn btn-googleplus" data-toggle="tooltip" title="" data-original-title="Login with Google"> <i aria-hidden="true" class="fab  fa-google-plus"></i> </a>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group m-b-0 m-t-10">
                                <div class="col-sm-12 text-center">
                                    Don't have an account? 
                                    <a href="#" class="text-info m-l-5"><router-link :to="{ name: 'signup' }"><b>Sign Up</b></router-link></a>
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
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      images: {
        background: require('@/assets/images/big/auth-bg.jpg'),
        headerform: require('@/assets/images/logo-icon.png')
      },
      emailUser: '',
      password: '',
      error: null
    };
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          emailUser: this.emailUser,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'dashboard'
        })
        
      } catch (error) {
        this.error = error.response.data.error
      }
    }    
  }
}
</script>

<style>

</style>
