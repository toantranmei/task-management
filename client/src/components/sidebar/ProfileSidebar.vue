<template>
	<li>
		<!-- User Profile -->
		<div class="user-profile dropdown m-t-20">
			<div class="user-pic">
				<img
					src="../../assets/images/users/5.jpg"
					alt="users"
					class="rounded-circle img-fluid"
				/>
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
				<a
					href="javascript:void(0)"
					title="Logout"
					class="btn btn-circle btn-sm"
				>
					<i class="ti-power-off"></i>
				</a>
				<profile-modal />
			</div>
		</div>
		<!-- End User Profile -->
	</li>
</template>

<script>
import ProfileModal from "@/components/users/ProfileModal";
export default {
	data() {
		return {};
	},
	components: {
		ProfileModal
	}
};
</script>

<style></style>
