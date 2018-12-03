<template>
  <div class="card">
    <div class="card-body">
      <center class="m-t-30">
        <img
          src="../../assets/images/users/5.jpg"
          class="rounded-circle"
          width="150"
        />
        <h4 class="card-title m-t-10">{{ nameUser }}</h4>
        <h6 class="card-subtitle">
          {{
            optionNameUser
              ? optionNameUser
              : "Bạn chưa thiết lập tên tùy chọn của bạn"
          }}
        </h6>
        <button class="btn btn-primary">Change my avatar</button>
      </center>
    </div>
    <div><hr /></div>
    <div class="card-body">
      <small class="text-muted">Email address</small>
      <h6>{{ emailUser }}</h6>
      <small class="text-muted p-t-30 db">Phone</small>
      <h6>{{ phoneUser ? phoneUser : "Bạn chưa thiết lập thông tin" }}</h6>
      <small class="text-muted p-t-30 db">Address</small>
      <h6>{{ addressUser ? addressUser : "Bạn chưa thiết lập thông tin" }}</h6>
      <small class="text-muted p-t-30 db">Social Profile</small> <br />
      <button class="btn btn-circle btn-secondary">
        <i class="fab fa-facebook-f"></i>
      </button>
      <button class="btn btn-circle btn-secondary">
        <i class="fab fa-twitter"></i>
      </button>
      <button class="btn btn-circle btn-secondary">
        <i class="fab fa-youtube"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as types from "../../store/types";
import UserService from "@/services/UserService";
export default {
  computed: {
    ...mapGetters({
      nameUser: types.NAME_USER,
      optionNameUser: types.OPTION_NAME_USER,
      emailUser: types.EMAIL_USER,
      phoneUser: types.PHONE_USER,
      addressUser: types.ADDRESS_USER
    })
  },
  async mounted() {
    await this.$store.dispatch(types.SHOW_USER);
  }
};
</script>
<style></style>
