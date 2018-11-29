<template>
  <header class="topbar">
    <nav class="navbar top-navbar navbar-expand-md navbar-dark">
      <navbar-header />
      <div class="navbar-collapse collapse" id="navbarSupportedContent">
        <navbar-header-left />
        <navbar-header-right />
      </div>
    </nav>
  </header>
</template>

<script>
import NavbarHeader from "@/components/header/NavbarHeader";
import NavbarHeaderLeft from "@/components/header/NavbarHeaderLeft";
import NavbarHeaderRight from "@/components/header/NavbarHeaderRight";
export default {
  data() {
    return {};
  },
  components: {
    NavbarHeader,
    NavbarHeaderLeft,
    NavbarHeaderRight
  }
};
</script>

<style></style>
