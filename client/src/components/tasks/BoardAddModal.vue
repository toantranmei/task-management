<template>
	<div
		id="add_board_task_modal"
		class="modal fade"
		tabindex="-1"
		role="dialog"
		aria-labelledby="myModalLabel"
		aria-hidden="true"
		style="display: none;"
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Hãy thêm bảng công việc bạn muốn</h4>
					<button
						type="button"
						class="close"
						data-dismiss="modal"
						aria-hidden="true"
					>
						×
					</button>
				</div>
				<div class="modal-body">
					<form>
						<div class="form-group">
							<label for="board-name" class="control-label">Tên bảng:</label>
							<input
								type="text"
								class="form-control"
								id="recipient-name"
								v-model="board.nameBoard"
							/>
						</div>
						<div class="form-group">
							<label for="desc-text" class="control-label">Mô tả:</label>
							<textarea
								class="form-control"
								id="message-text"
								v-model="board.descBoard"
							></textarea>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-default waves-effect"
						data-dismiss="modal"
					>
						Hủy bỏ
					</button>
					<button
						type="button"
						class="btn btn-danger waves-effect waves-light"
						@click.prevent="save"
					>
						Thêm bảng
					</button>
				</div>
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
	methods: {
		save() {
			this.$store.dispatch(types.ACTION_SAVE_BOARD, this.board)
		}
	}
};
</script>

<style></style>
