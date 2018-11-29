<template>
  <aside class="left-sidebar">
    <div class="scroll-sidebar">
      <nav class="sidebar-nav">
        <ul id="sidebarnav">
          <profile-sidebar />
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
          <router-link
            :to="{ name: 'chat' }"
            tag="li"
            active-class="selected"
            class="sidebar-item"
          >
            <a class="sidebar-link waves-effect waves-dark">
              <i class="icon-New-Mail"></i>
              <span class="hide-menu">Tin nhắn</span>
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
    </div>
  </aside>
</template>

<script>
import ProfileSidebar from "@/components/sidebar/ProfileSidebar";
export default {
  data() {
    return {};
  },
  components: {
    ProfileSidebar
  }
};
</script>

<style></style>
