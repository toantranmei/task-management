<template>
	<div class="container-fluid">
		<list-chat />
		<box-chat />
	</div>
</template>

<script>
import ListChat from "@/components/chat/ListChat";
import BoxChat from "@/components/chat/BoxChat";
export default {
	data() {
		return {};
	},
	components: {
		ListChat,
		BoxChat
	}
};
</script>

<style></style>
