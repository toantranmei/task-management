<template>
  <div>
    <router-link
      :to="{
        name: 'project',
        params: {
          projectId: $route.params.projectId
        }
      }"
      class="card btn p-0"
    >
      <div class="d-flex flex-row">
        <div class="p-10 bg-cyan">
          <h3 class="text-white box m-b-0"><i class="ti-server"></i></h3>
        </div>
        <div class="align-self-center m-l-20">
          <h3 class="text-cyan m-b-0 text-left">Tổng quan</h3>
          <span class="text-muted">Toàn bộ thông tin của dự án</span>
        </div>
      </div>
    </router-link>
    <div class="card btn p-0">
      <div class="d-flex flex-row">
        <div class="p-10 bg-success">
          <h3 class="text-white box m-b-0"><i class="ti-calendar"></i></h3>
        </div>
        <div class="align-self-center m-l-20">
          <h3 class="text-success m-b-0 text-left">Xem công việc</h3>
          <span class="text-muted">Các công việc của dự án</span>
        </div>
      </div>
    </div>
    <div class="card btn p-0">
      <div class="d-flex flex-row">
        <div class="p-10 bg-primary">
          <h3 class="text-white box m-b-0">
            <i class="ti-themify-favicon-alt"></i>
          </h3>
        </div>
        <div class="align-self-center m-l-20">
          <h3 class="text-primary m-b-0 text-left">Xem thảo luận</h3>
          <span class="text-muted">Các cuộc thảo luận của thành viên</span>
        </div>
      </div>
    </div>
    <router-link
      :to="{
        name: 'editproject',
        params: {
          projectId: $route.params.projectId
        }
      }"
      class="card btn p-0"
    >
      <div class="d-flex flex-row">
        <div class="p-10 bg-warning">
          <h3 class="text-white box m-b-0"><i class="ti-settings"></i></h3>
        </div>
        <div class="align-self-center m-l-20">
          <h3 class="text-warning m-b-0 text-left">Thiết lập dự án</h3>
          <span class="text-muted">Cài đặt chung cho dự án</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style></style>
