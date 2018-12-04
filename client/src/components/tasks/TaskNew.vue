<template>
	<div class="card border-warning">
		<div class="card-header bg-warning">
			<h4 class="m-b-0 text-white text-center">Hôm nay bạn phải làm gì?</h4>
		</div>
		<div class="card-body">
			<input
				type="text"
				class="form-control mb-3"
				placeholder="Công việc bạn muốn làm là..."
        v-model="task.nameTask"
			/>
			<button class="btn btn-block btn-warning" @click="save">Thêm công việc</button>
		</div>
	</div>
</template>

<script>
import * as types from '../../store/types'
export default {
  data () {
    return {
      task: {
        nameTask: ''
      }
    }
  },
	methods: {
		save() {
      const boardId = this.$store.state.route.params.boardId;
      this.$store.dispatch(types.ACTION_ADD_TASK, boardId, this.task)
    }
	}
}
</script>

<style></style>
