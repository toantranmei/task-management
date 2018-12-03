<template>
	<div class="card border-info">
		<div class="card-header bg-info">
			<h4 class="m-b-0 text-white">Thanh công cụ</h4>
		</div>
		<div class="card-body">
			<div class="custom-control custom-checkbox mb-2">
				<input
					type="checkbox"
					class="custom-control-input"
					id="showTitle"
					v-model="showTitle"
					checked
				/>
				<label class="custom-control-label" for="showTitle"
					>Hiển thị tiêu đề</label
				>
			</div>
			<div class="custom-control custom-checkbox mb-2">
				<input
					type="checkbox"
					class="custom-control-input"
					id="showboard"
					v-model="showboard"
					chekcked
				/>
				<label class="custom-control-label" for="showboard"
					>Hiển thị bảng thêm công việc</label
				>
			</div>
			<div class="custom-control custom-checkbox mb-2">
				<input
					type="checkbox"
					class="custom-control-input"
					id="showstats"
					v-model="showstats"
				/>
				<label class="custom-control-label" for="showstats"
					>Hiển thị thống kê</label
				>
			</div>
			<div class="custom-control custom-checkbox mb-2">
				<input
					type="checkbox"
					class="custom-control-input"
					id="showtask"
					v-model="showtask"
					chekcked
				/>
				<label class="custom-control-label" for="showtask"
					>Hiển thị công việc</label
				>
			</div>
			<div class="custom-control custom-checkbox mb-2">
				<input
					type="checkbox"
					class="custom-control-input"
					id="showdonetask"
					v-model="showdonetask"
				/>
				<label class="custom-control-label" for="showdonetask"
					>Hiển thị công việc đã hoàn thành</label
				>
			</div>
			<hr />
			<div class="form-update">
				<h5>Thay đổi thông tin</h5>
				<input
					type="text"
					placeholder="Tên bảng công việc"
					class="mb-3 form-control"
					v-model="board.nameBoard"
				/>
				<input
					type="text"
					placeholder="Mô tả bảng công việc"
					class="mb-3 form-control"
					v-model="board.descBoard"
				/>
				<button class="btn btn-block btn-primary" @click="update">
					Cập nhật bảng
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import * as types from "../../store/types";
export default {
	data() {
		return {
			board: {
				nameBoard: "",
				descBoard: ""
			}
		};
	},
	computed: {
		showTitle: {
			get() {
				return this.$store.getters[types.STATUS_TITLE];
			},
			set(value) {
				this.$store.commit(types.MUTATION_STATUS_TITLE, value);
			}
		},
		showboard: {
			get() {
				return this.$store.getters[types.STATUS_ADD_TASK_BOARD];
			},
			set(value) {
				this.$store.commit(types.MUTATION_STATUS_ADD_TASK_BOARD, value);
			}
		},
		showstats: {
			get() {
				return this.$store.getters[types.STATUS_STATS];
			},
			set(value) {
				this.$store.commit(types.MUTATION_STATUS_STATS, value);
			}
		},
		showtask: {
			get() {
				return this.$store.getters[types.STATUS_TASK];
			},
			set(value) {
				this.$store.commit(types.MUTATION_STATUS_TASK, value);
			}
		},
		showdonetask: {
			get() {
				return this.$store.getters[types.STATUS_DONE_TASK];
			},
			set(value) {
				this.$store.commit(types.MUTATION_STATUS_DONE_TASK, value);
			}
		}
	},
	methods: {
		update() {
			console.log(this.board._id);
			this.$store.dispatch(types.ACTION_UPDATE_BOARD, this.board);
		}
	},
	async mounted() {
		await this.$store.dispatch(
			types.ACTION_CURRENT_BOARD,
			this.$store.state.route.params.boardId
		);
		const currentBoard = this.$store.getters[types.CURRENT_BOARD];
		this.board.nameBoard = currentBoard.nameBoard;
		this.board.descBoard = currentBoard.descBoard;
		this.board._id = currentBoard._id;
	}
};
</script>

<style></style>
