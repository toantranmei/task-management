<template>
  <div class="container-fluid">
    <div class="card-group">
      <!-- Card -->
      <div class="card">
          <div class="card-body">
              <div class="d-flex align-items-center">
                  <div class="m-r-10">
                      <span class="btn btn-circle btn-lg bg-danger">
                          <i class="ti-clipboard text-white"></i>
                      </span>
                  </div>
                  <div>
                      Dự án
                  </div>
                  <div class="ml-auto">
                      <h2 class="m-b-0 font-light">23</h2>
                  </div>
              </div>
          </div>
      </div>
      <!-- Card -->
      <!-- Card -->
      <div class="card">
          <div class="card-body">
              <div class="d-flex align-items-center">
                  <div class="m-r-10">
                      <span class="btn btn-circle btn-lg btn-info">
                          <i class="ti-wallet text-white"></i>
                      </span>
                  </div>
                  <div>
                      Công việc

                  </div>
                  <div class="ml-auto">
                      <h2 class="m-b-0 font-light">113</h2>
                  </div>
              </div>
          </div>
      </div>
      <!-- Card -->
      <!-- Card -->
      <div class="card">
          <div class="card-body">
              <div class="d-flex align-items-center">
                  <div class="m-r-10">
                      <span class="btn btn-circle btn-lg bg-success">
                          <i class="ti-shopping-cart text-white"></i>
                      </span>
                  </div>
                  <div>
                      Nhóm

                  </div>
                  <div class="ml-auto">
                      <h2 class="m-b-0 font-light">43</h2>
                  </div>
              </div>
          </div>
      </div>
      <!-- Card -->
      <!-- Card -->
      <div class="card">
          <div class="card-body">
              <div class="d-flex align-items-center">
                  <div class="m-r-10">
                      <span class="btn btn-circle btn-lg bg-warning">
                          <i class="mdi mdi-currency-usd text-white"></i>
                      </span>
                  </div>
                  <div>
                      Đến hạn

                  </div>
                  <div class="ml-auto">
                      <h2 class="m-b-0 font-light">63</h2>
                  </div>
              </div>
          </div>
      </div>
      <!-- Card -->
      <!-- Column -->
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      images: {
        darklogo: require('@/assets/images/logo-icon.png'),
        lightlogo: require('@/assets/images/logo-light-icon.png'),
        darktext: require('@/assets/images/logo-text.png'),
        lighttext: require('@/assets/images/logo-light-text.png'),
        userImage: require('@/assets/images/users/1.jpg') 
      }
    }
  }
}
</script>

<style>

</style>
