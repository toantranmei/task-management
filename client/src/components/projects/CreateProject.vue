<template>
<div class="card">
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
      <div class="form-group">
        <label for="exampleInputEmail1">Loại dự án</label>
        <input type="text" 
          class="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          placeholder="Nhập loại dự án"
          v-model="project.nameProject">
        <small id="emailHelp" class="form-text text-muted">Cách nhau bằng dấu "," và tối đa 5 loại.</small>
      </div>
      <button type="submit" 
        class="btn btn-block btn-success"
        @click="create"> <i class="fa fa-check"></i> Create A Project</button>
      <button type="button" 
        class="btn btn-block btn-dark"
        @click="closedComponent('')">Hủy bỏ</button>
  </div>
</div>    
</template>

<script>
import ProjectService from '@/services/ProjectService'
import { bus } from '../../main.js'
export default {
  data () {
    return {
      statusAddProjectForm: false,
      project: {
        nameProject: '',
        descProject: ''
      }
    }
  },
  methods: {
    closedComponent(comp) {
      bus.$emit('closeComponent', comp)
    },
    async create () {
      try {
        const newProject = await ProjectService.newProject(this.project)
        this.project.nameProject = ''
        this.project.descProject = ''
        bus.$emit('new-project', newProject.data)
      } catch (err) {
        console.log(err)
      }
    }
  },
  created () {
  }
}
</script>

<style>
</style>
