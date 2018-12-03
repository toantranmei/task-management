<template>
  <div id="app">
    <pre-loader />
    <div id="main-wrapper">
      <topbar v-if="!hide" /> <sidebar v-if="!hide" />
      <div v-bind:class="!hide ? 'page-wrapper' : ''">
        <bread-crumb v-if="!hide" />
        <router-view />
        <page-footer v-if="!hide" />
      </div>
    </div>
    <page-tool v-if="!hide" />
    <div class="chat-windows show-chat"></div>
  </div>
</template>

<script>
import PreLoader from "@/components/layouts/PreLoader";
import Sidebar from "@/components/sidebar/Index";
import Topbar from "@/components/header/Index";
import BreadCrumb from "@/components/layouts/BreadCrumb";
import PageFooter from "@/components/layouts/Footer";
import PageTool from "@/components/tools/Index";
import { renderAppScripts } from "./configs/scripts";
export default {
  name: "App",
  components: {
    PreLoader,
    Sidebar,
    Topbar,
    BreadCrumb,
    PageFooter,
    PageTool
  },
  computed: {
    hide() {
      return this.$route.path === "/login" || this.$route.path === "/signup";
    },
    hideChat() {
      return this.$route.path === "/chat";
    }
  },
  created() {
    renderAppScripts();
  }
};
</script>
<style>
@import "./assets/css/style.css";
</style>
