<template>
	<div class="container-fluid"><router-view /></div>
</template>

<script>
import { renderCustomScripts, renderAppScripts } from "../../configs/scripts";
export default {
	created() {
		renderAppScripts();
		renderCustomScripts();
	}
};
</script>

<style></style>
