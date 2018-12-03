<template>
  <div class="card">
    <div class="card-body">
      <form class="form-horizontal form-material">
        <div class="form-group">
          <label class="col-md-12">Username</label>
          <div class="col-md-12">
            <input
              type="text"
              class="form-control form-control-line"
              value="someoneusername"
              disabled
              v-model="user.usernameUser"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-12">Full Name</label>
          <div class="col-md-12">
            <input
              type="text"
              placeholder="Johnathan Doe"
              class="form-control form-control-line"
              v-model="user.nameUser"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-12">Options Name</label>
          <div class="col-md-12">
            <input
              type="text"
              placeholder="Display name"
              class="form-control form-control-line"
              v-model="user.optionNameUser"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="example-email" class="col-md-12">Email</label>
          <div class="col-md-12">
            <input
              type="email"
              placeholder="johnathan@admin.com"
              class="form-control form-control-line"
              id="example-email"
              v-model="user.emailUser"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-12">New Password</label>
          <div class="col-md-12">
            <input
              type="password"
              value="password"
              class="form-control form-control-line"
              v-model="user.password"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-12">Phone No</label>
          <div class="col-md-12">
            <input
              type="text"
              placeholder="123 456 7890"
              class="form-control form-control-line"
              v-model="user.phoneUser"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-12">Adress</label>
          <div class="col-md-12">
            <input
              type="text"
              placeholder="Someong"
              class="form-control form-control-line"
              v-model="user.addressUser"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-12">More about you...</label>
          <div class="col-md-12">
            <textarea
              rows="5"
              class="form-control form-control-line"
              v-model="user.descUser"
            ></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-12">
            <button class="btn btn-success" @click.prevent="update">
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as types from "../../store/types";
export default {
  data() {
    return {
      user: {
        nameUser: "",
        emailUser: "",
        usernameUser: "",
        optionNameUser: "",
        descUser: "",
        phoneUser: "",
        addressUser: "",
        password: "",
        imageUser: ""
      }
    };
  },
  methods: {
    ...mapActions({
      getUserInfo: types.SHOW_USER
    }),
    get() {
      this.user = this.$store.state.user.userLogged;
    },
    update() {
      this.$store.dispatch(types.ACTION_UPDATE_USER, this.user);
    }
  },
  async created() {
    await this.getUserInfo();
    await this.get();
  }
};
</script>

<style></style>
