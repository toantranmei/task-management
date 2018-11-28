<template>
  <aside class="left-sidebar">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar">
      <!-- Sidebar navigation-->
      <nav class="sidebar-nav">
        <ul id="sidebarnav">
          <!-- User Profile-->
          <li>
            <!-- User Profile-->
            <div class="user-profile dropdown m-t-20">
              <div class="user-pic">
                <img :src="images.userImage" alt="users" class="rounded-circle img-fluid">
              </div>
              <div class="user-content hide-menu m-t-10">
                <h5 class="m-b-10 user-name font-medium">Steave Jobs</h5>
                <a
                  href="javascript:void(0)"
                  class="btn btn-circle btn-sm m-r-5"
                  id="Userdd"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti-settings"></i>
                </a>
                <a href="javascript:void(0)" title="Logout" class="btn btn-circle btn-sm">
                  <i class="ti-power-off"></i>
                </a>
                <div class="dropdown-menu animated flipInY" aria-labelledby="Userdd">
                  <a class="dropdown-item" href="javascript:void(0)">
                    <i class="ti-user m-r-5 m-l-5"></i> Thông tin cá nhân
                  </a>
                  <a class="dropdown-item" href="javascript:void(0)">
                    <i class="ti-email m-r-5 m-l-5"></i> Hòm thư điện tử
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">
                    <i class="ti-settings m-r-5 m-l-5"></i> Thiết lập tài khoản
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)" @click="logout">
                    <i class="fa fa-power-off m-r-5 m-l-5"></i> Đăng xuất
                  </a>
                </div>
              </div>
            </div>
            <!-- End User Profile-->
          </li>
          <!-- User Profile-->
          <router-link
            :to="{ name: 'dashboard' }"
            tag="li"
            active-class="selected"
            class="sidebar-item"
            exact
          >
            <a class="sidebar-link waves-effect waves-dark">
              <i class="icon-Car-Wheel"></i>
              <span class="hide-menu">Bảng điều khiển</span>
            </a>
          </router-link>

          <li class="nav-small-cap">
            <i class="mdi mdi-dots-horizontal"></i>
            <span class="hide-menu">Cá nhân</span>
          </li>
          <router-link
            :to="{ name: 'tasks' }"
            tag="li"
            active-class="selected"
            class="sidebar-item"
          >
            <a class="sidebar-link waves-effect waves-dark">
              <i class="icon-Ticket"></i>
              <span class="hide-menu">Quản lý công việc</span>
            </a>
          </router-link>
          <router-link
            :to="{ name: 'email' }"
            tag="li"
            active-class="selected"
            class="sidebar-item"
          >
            <a class="sidebar-link waves-effect waves-dark">
              <i class="icon-Mailbox-Empty"></i>
              <span class="hide-menu">Hòm thư điện tử</span>
            </a>
          </router-link>
          <li class="nav-small-cap">
            <i class="mdi mdi-dots-horizontal"></i>
            <span class="hide-menu">Cộng đồng</span>
          </li>
          <router-link
            :to="{ name: 'projects' }"
            tag="li"
            active-class="selected"
            class="sidebar-item"
          >
            <a class="sidebar-link waves-effect waves-dark">
              <i class="icon-Paint-Brush"></i>
              <span class="hide-menu">Quản lí dự án</span>
            </a>
          </router-link>
          <router-link
            :to="{ name: 'groups' }"
            tag="li"
            active-class="selected"
            class="sidebar-item"
          >
            <a class="sidebar-link waves-effect waves-dark">
              <i class="icon-Global-Position"></i>
              <span class="hide-menu">Nhóm cộng đồng</span>
            </a>
          </router-link>
          <li class="nav-small-cap">
            <i class="mdi mdi-dots-horizontal"></i>
            <span class="hide-menu">Tài khoản</span>
          </li>
          <router-link
            :to="{ name: 'settings' }"
            tag="li"
            active-class="selected"
            class="sidebar-item"
          >
            <a class="sidebar-link waves-effect waves-dark">
              <i class="icon-Receipt-4"></i>
              <span class="hide-menu">Thiết lập chung</span>
            </a>
          </router-link>
        </ul>
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </aside>
</template>

<script>
export default {
  data() {
    return {
      images: {
        darklogo: require("@/assets/images/logo-icon.png"),
        lightlogo: require("@/assets/images/logo-light-icon.png"),
        darktext: require("@/assets/images/logo-text.png"),
        lighttext: require("@/assets/images/logo-light-text.png"),
        userImage: require("@/assets/images/users/1.jpg")
      }
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login"
      });
    }
  }
};
</script>


<style>
</style>
