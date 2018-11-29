<template>
	<ul class="navbar-nav float-right">
		<comment-header />
		<message-header />
		<profile-header />
	</ul>
</template>

<script>
import CommentHeader from "@/components/header/CommentHeader";
import MessageHeader from "@/components/header/MessageHeader";
import ProfileHeader from "@/components/header/ProfileHeader";
export default {
	data() {
		return {};
	},
	components: {
		CommentHeader,
		MessageHeader,
		ProfileHeader
	}
};
</script>

<style></style>
