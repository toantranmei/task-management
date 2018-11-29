<template>
	<div
		class="dropdown-menu dropdown-menu-right user-dd animated flipInY"
		aria-labelledby="Userdd"
	>
		<slot></slot>
		<router-link tag="a" class="dropdown-item" :to="{ name: 'user' }"
			><i class="ti-user m-r-5 m-l-5"></i> Trang cá nhân</router-link
		>
		<router-link tag="a" class="dropdown-item" :to="{ name: 'email' }"
			><i class="ti-email m-r-5 m-l-5"></i> Hòm thư điện tử</router-link
		>
		<router-link tag="a" class="dropdown-item" :to="{ name: 'settings' }"
			><i class="ti-settings m-r-5 m-l-5"></i> Thiết lập chung</router-link
		>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="javascript:void(0)" @click="logout">
			<i class="fa fa-power-off m-r-5 m-l-5"></i> Đăng xuất</a
		>
	</div>
</template>

<script>
export default {
	methods: {
		logout() {
			this.$store.dispatch("setToken", null);
			this.$store.dispatch("setUser", null);
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			this.$router.push({
				name: "login"
			});
		}
	}
};
</script>

<style></style>
