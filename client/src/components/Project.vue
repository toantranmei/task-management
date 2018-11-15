<template>
<div class="page-wrapper">
  <!-- ============================================================== -->
  <!-- Bread crumb and right sidebar toggle -->
  <!-- ============================================================== -->
  <div class="page-breadcrumb">
    <div class="row">
        <div class="col-5 align-self-center d-flex flex-row align-items-center">
            <h4 class="page-title">Project Management</h4>
            <button type="button"
              class="btn waves-effect waves-light btn-success ml-3"
              @click="statusAddProjectForm = !statusAddProjectForm">Tạo dự án</button>
        </div>
        <div class="col-7 align-self-center">
            <div class="d-flex no-block justify-content-end align-items-center">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
  </div>
  <!-- ============================================================== -->
  <!-- End Bread crumb and right sidebar toggle -->
  <!-- ============================================================== -->
  <!-- ============================================================== -->
  <!-- Container fluid  -->
  <!-- ============================================================== -->
  <div class="container-fluid">
    <!-- ============================================================== -->
    <!-- Start Page Content -->
    <!-- ============================================================== -->
    <div class="row">
      <div class="col-12 col-md-9">
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
          <div class="card">
              <div class="card-body">
                  <div class="d-flex flex-column">
                      <h3>Tìm dự án</h3>
                      <div class="d-flex flex-row">
                            <div class="custom-control custom-checkbox mr-2">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">All</label>
                            </div>
                            <div class="custom-control custom-checkbox mr-2">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">New</label>
                            </div>
                            <div class="custom-control custom-checkbox mr-2">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">Old</label>
                            </div>
                      </div>
                  </div>
                  <div class="d-flex flex-column mt-3">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">Designing</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">Development</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">Marketing</label>
                        </div>
                  </div>
              </div>
          </div>
          <div class="card">
              <div class="card-body">
                  <div class="d-flex flex-column">
                    <h3>Công việc hôm nay</h3>
                    <div class="d-flex flex-column mt-3">
                            <div class="custom-control custom-checkbox mb-2">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1"> I am checked & disabled Checkbox,  I am checked & disabled Checkbox</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-2">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1"> I am checked & disabled Checkbox,  I am checked & disabled Checkbox</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-2">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1"> I am checked & disabled Checkbox,  I am checked & disabled Checkbox</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-2">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1"> I am checked & disabled Checkbox,  I am checked & disabled Checkbox</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-2">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1"> I am checked & disabled Checkbox,  I am checked & disabled Checkbox</label>
                            </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>
    <!-- ============================================================== -->
    <!-- End PAge Content -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Right sidebar -->
    <!-- ============================================================== -->
    <!-- .right-sidebar -->
    <!-- ============================================================== -->
    <!-- End Right sidebar -->
    <!-- ============================================================== -->
  </div>
  <!-- ============================================================== -->
  <!-- End Container fluid  -->
  <!-- ============================================================== -->
</div>
</template>

<script>
import ProjectService from '@/services/ProjectService'
export default {
  data () {
    return {
        statusAddProjectForm: false,
        project: {
          nameProject: null,
          descProject: null
        },
        projects: null
    }
  },
  methods: {
    async create () {
      try {
        await ProjectService.newProject(this.project)
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    const response = await ProjectService.index()
    this.projects = response.data.slice().reverse()
  }
}
</script>

<style>

</style>
