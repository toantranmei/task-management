<template>
  <div class="row">
    <div class="col-lg-4 col-xlg-3 col-md-5">
      <user-info/>
    </div>
    <div class="col-lg-8 col-xlg-9 col-md-7">
      <user-edit/>
    </div>
  </div>
</template>

<script>
import UserInfo from "@/components/users/UserInfo";
import UserEdit from "@/components/users/UserEdit";
export default {
  components: {
    UserInfo,
    UserEdit
  }
};
</script>

<style>
</style>
