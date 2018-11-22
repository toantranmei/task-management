<template>
  <div id="app">
    <div id="main-wrapper">
        <topbar/>
        <sidebar/>
        <div class="page-wrapper">
          <bread-crumb/>
          <router-view/>
          <page-footer/>
        </div>
    </div>
  </div>
</template>

<script>
import PreLoader from '@/components/layouts/PreLoader'
import Sidebar from '@/components/layouts/Sidebar'
import Topbar from '@/components/layouts/Header'
import BreadCrumb from '@/components/layouts/BreadCrumb'
import PageFooter from '@/components/layouts/Footer'
export default {
  name: 'App',
  components: {
    PreLoader, 
    Sidebar, 
    Topbar,
    BreadCrumb,
    PageFooter
  }
}
</script>
<style>

</style>
