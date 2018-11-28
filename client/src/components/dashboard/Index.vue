<template>
<div class="container-fluid">
  <user-dashboard/>
</div>
</template>

<script>
import UserDashboard from '@/components/dashboard/UserDashboard'
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
  },
  components: {
    UserDashboard
  }
}
</script>

<style>

</style>
