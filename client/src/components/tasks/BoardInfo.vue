<template>
	<div class="card border-success">
		<div class="card-header bg-success">
			<h4 class="m-b-0 text-white text-center">Tình trạng công việc</h4>
		</div>
		<div class="card-body">
			<h4>{{ nameBoard }}</h4>
			<hr />
			<h5>Mô tả bảng:</h5>
			<p>{{ descBoard }}</p>
			<h5 class="">Illustrator<span class="pull-right">65%</span></h5>
			<div class="progress">
				<div
					class="progress-bar bg-success wow animated progress-animated"
					style="width: 65%; height:6px;"
					role="progressbar"
				>
					<span class="sr-only">60% Complete</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
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
		nameBoard() {
			const currentBoard = this.$store.getters[types.CURRENT_BOARD];
			return currentBoard.nameBoard;
		},
		descBoard() {
			const currentBoard = this.$store.getters[types.CURRENT_BOARD];
			return currentBoard.descBoard;
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
	}
};
</script>

<style></style>
