<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-9">
        <div class="row no-gutters">
          <div class="col-6">
            <button 
              type="button"
              class="btn waves-effect waves-light btn-success mb-3"
              @click="statusAddProjectForm = !statusAddProjectForm">Tạo dự án</button>
          </div>
          <div class="col-6 text-right">
            <div class="btn-group">
              <button type="button" class="btn btn-success">Chọn cách sắp xếp</button>
              <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="javascript:void(0)">Cũ - Mới</a>
                  <a class="dropdown-item" href="javascript:void(0)">Mới - Cũ</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">Nhiều công việc nhất</a>
                  <a class="dropdown-item" href="javascript:void(0)">Ít công việc nhất</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card" v-if="statusAddProjectForm">
            <div class="card-body">
                <div class="form-group">
                    <label for="exampleInputEmail1">Tên dự án</label>
                    <input type="text" 
                      class="form-control" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp" 
                      placeholder="Nhập tên dự án"
                      v-model="project.nameProject">
                    <small id="emailHelp" class="form-text text-muted">Bạn có thể chỉnh sửa tên dự án sau khi thêm!</small>
                </div>
                <div class="form-group">
                    <label>Mô tả dự án</label>
                    <textarea class="form-control" 
                      rows="5"
                      v-model="project.descProject"></textarea>
                </div>
                <button type="submit" 
                  class="btn btn-block btn-success"
                  @click="create"> <i class="fa fa-check"></i> Create A Project</button>
                <button type="button" 
                  class="btn btn-block btn-dark"
                  @click="statusAddProjectForm = !statusAddProjectForm">Hủy bỏ</button>
            </div>
        </div>
          <div class="list-project">
            <div class="card" v-for="project in projects">
              <div class="card-body">
                <div class="d-flex flex-row">
                  <div class="round align-self-center round-success"><i class="ti-wallet"></i></div>
                    <div class="m-l-10 w-100 align-self-center">
                        <h5>Quá trình làm việc (Tuần này)</h5>
                        <span class="text-muted">
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 75%;height:15px;">75%</div>
                            </div>
                        </span>
                    </div>
                    </div>
                    <div class="d-flex flex-column mt-3">
                        <h3>{{ project.nameProject }}</h3>
                        <p>{{ project.descProject }}</p>
                    </div>
                    <div class="d-flex flex-row mt-2">
                        <span class="mr-1 label label-rounded label-success">Design Team</span>
                        <span class="mr-1 label label-rounded label-inverse">Front-end Team</span>
                        <span class="mr-1 label label-rounded label-inverse">Development Team</span>
                    </div>
              </div>
            </div>
          </div>
      </div>
      <div class="col-12 col-md-3">
          <l-filter/>
          <l-task-today/>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectService from '@/services/ProjectService'
import LFilter from '@/components/projects/FilterProject'
import LTaskToday from '@/components/projects/TaskProject'
export default {
  data () {
    return {
        statusAddProjectForm: false,
        project: {
          nameProject: '',
          descProject: ''
        },
        projects: []
    }
  },
  components: {
    LFilter, LTaskToday
  },
  methods: {
    async create () {
      try {
        await ProjectService.newProject(this.project)
        this.project.nameProject = ''
        this.project.descProject = ''
        this.fetchProject()
      } catch (err) {
        console.log(err)
      }
    },
    async fetchProject () {
      const response = await ProjectService.index()
      this.projects = response.data.slice().reverse()
    }
  },
  created () {
    this.fetchProject()
  }
}
</script>

<style>

</style>
