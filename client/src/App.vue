<template>
  <div id="app">
    <div id="main-wrapper">
        <topbar v-if="!hide" />
        <sidebar v-if="!hide" />
        <div v-bind:class="!hide ? 'page-wrapper' : ''">
          <bread-crumb v-if="!hide" />
          <router-view/>
          <page-footer v-if="!hide"/>
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
  },
  computed: {
    hide () {
      return this.$route.path === '/login' || this.$route.path === '/signup'
    }
  }
}
</script>
<style>

</style>
