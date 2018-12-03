<template>
	<div class="col-12">
		<h3>Danh sách các bảng công việc của bạn:</h3>
		<span>Bạn có thể tạo thêm nhiều bảng nếu bạn muốn</span>
			<board-list />
			<board-add-modal />
	</div>
</template>

<script>
import BoardList from "@/components/tasks/BoardList";
import BoardAddModal from "@/components/tasks/BoardAddModal";
export default {
	data() {
		return {};
	},
	components: {
		BoardList,
		BoardAddModal
	}
};
</script>

<style></style>
