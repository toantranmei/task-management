<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 col-md-9">
				<div class="row no-gutters">
					<div class="col-6">
						<button
							type="button"
							class="btn waves-effect waves-light btn-success mb-3"
							@click="$router.go(-1);"
						>
							Quay lại
						</button>
					</div>
					<div class="col-6 text-right">
						<button
							type="button"
							class="btn waves-effect waves-light btn-outline-danger mb-3"
							@click="remove"
						>
							Xóa dự án
						</button>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="form-group">
							<label for="exampleInputEmail1">Tên dự án</label>
							<input
								type="text"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Nhập tên dự án"
								v-model="project.nameProject"
							/>
							<small id="emailHelp" class="form-text text-muted"
								>Bạn có thể chỉnh sửa tên dự án sau khi thêm!</small
							>
						</div>
						<div class="form-group">
							<label>Mô tả dự án</label>
							<textarea
								class="form-control"
								rows="5"
								v-model="project.descProject"
							></textarea>
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1">Loại dự án</label>
							<input
								type="text"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Nhập loại dự án"
							/>
							<small id="emailHelp" class="form-text text-muted"
								>Cách nhau bằng dấu "," và tối đa 5 loại.</small
							>
						</div>
						<button
							type="submit"
							class="btn btn-block btn-success"
							@click="update"
						>
							<i class="fa fa-check"></i> Update Project
						</button>
						<button
							type="button"
							class="btn btn-block btn-dark"
							@click="$router.go(-1);"
						>
							Hủy bỏ
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProjectService from "@/services/ProjectService";
export default {
	data() {
		return {
			error: "",
			project: {
				nameProject: null,
				descProject: null
			}
		};
	},
	methods: {
		async remove() {
			try {
				const projectId = this.$store.state.route.params.projectId;
				const response = await ProjectService.remove(projectId);
				this.$router.push({
					name: "projects"
				});
			} catch (error) {
				this.error = error.response.data.error;
			}
		},
		async update() {
			const projectId = this.$store.state.route.params.projectId;
			try {
				console.log(this.project._id);
				await ProjectService.update(this.project);
				this.$router.push({
					name: "project",
					params: {
						projectId: projectId
					}
				});
			} catch (err) {
				console.log(err);
			}
		}
	},
	async mounted() {
		try {
			const projectId = this.$store.state.route.params.projectId;
			const projectDetails = await ProjectService.show(projectId);
			this.project = projectDetails.data;
		} catch (error) {
			console.log(error);
		}
	}
};
</script>

<style></style>
