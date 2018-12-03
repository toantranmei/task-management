<template>
	<div class="row mt-3">
		<div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="board in boards">
			<div class="card">
				<div class="card-body">
					<h3 class="card-title">{{ board.nameBoard }}</h3>
					<p class="card-text">
						{{ board.descBoard }}
					</p>
					<router-link
						tag="a"
						class="btn btn-primary"
						:to="{
							name: 'boardview',
							params: {
								boardId: board._id
							}
						}">Xem chi tiết</router-link>
				</div>
			</div>
		</div>
		<div class="col-12 col-sm-6 col-md-4 col-lg-3">
			<div class="card">
				<div class="card-body">
					<p class="card-text">Bạn muốn tạo thêm bảng công việc</p>
					<a
						href="javascript:void(0)"
						class="btn btn-success"
						data-toggle="modal"
						data-target="#add_board_task_modal"
						>Tạo ngay</a
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../../store/types";
export default {
	data() {
		return {};
	},
	computed: {
		...mapGetters({
			boards: types.BOARDS
		})
	},
	async created() {
		await this.$store.dispatch(types.ACTION_BOARDS);
	}
};
</script>

<style></style>
