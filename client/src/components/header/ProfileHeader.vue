<template>
	<li class="nav-item dropdown">
		<a
			class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic"
			href=""
			data-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false"
		>
			<img
				src="../../assets/images/users/5.jpg"
				alt="user"
				class="rounded-circle"
				width="31"
			/>
		</a>

		<profile-modal>
			<span class="with-arrow"> <span class="bg-primary"></span> </span>
			<div
				class="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10"
			>
				<div class="">
					<img
						src="../../assets/images/users/5.jpg"
						alt="user"
						class="img-circle"
						width="60"
					/>
				</div>
				<div class="m-l-10">
					<h4 class="m-b-0">Steave Jobs</h4>
					<p class=" m-b-0">varun@gmail.com</p>
				</div>
			</div>
		</profile-modal>
	</li>
</template>

<script>
import ProfileModal from "@/components/users/ProfileModal";
export default {
	data() {
		return {};
	},
	methods: {
		logout() {
			this.$store.dispatch("setToken", null);
			this.$store.dispatch("setUser", null);
			this.$router.push({
				name: "login"
			});
		}
	},
	components: {
		ProfileModal
	}
};
</script>

<style></style>
