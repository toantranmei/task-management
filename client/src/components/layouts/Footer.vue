<template>
  <footer class="footer text-center">
    All Rights Reserved by RHP Team. Designed and Developed by <a :href="link_fb" target="_blank">Sky Albert</a>.
  </footer>
</template>

<script>
const configs = require('../../configs/info')
export default {
	data () {
		return {
			link_fb: configs.LINK_FB
		}
	}
}
</script>

<style>

</style>
