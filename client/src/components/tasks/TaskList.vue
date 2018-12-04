<template>
	<div class="card border-info">
		<div class="card-header bg-info">
			<h4 class="m-b-0 text-white text-center">Danh sách công việc</h4>
		</div>
		<div class="card-body">
			<div class="custom-control custom-checkbox mb-2" v-for="task in tasks" v-bind:key="task._id">
				<input type="checkbox" class="custom-control-input" id="customCheck1" />
				<label class="custom-control-label" for="customCheck1"
					>{{ task.nameTask }}</label
				>
				<button class="btn btn-danger btn-xs float-right">Xóa</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../../store/types'
export default {
  computed: {
    ...mapGetters({
      tasks: types.TASKS
    })
  },
  async created() {
    await this.$store.dispatch(types.ACTION_TASKS, this.$store.state.route.params.boardId)
  }
}
</script>

<style></style>
