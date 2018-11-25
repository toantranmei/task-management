<template>
  <div class="list-project">
    <div class="card" v-for="project in projects" v-bind:key="project._id">
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
            <div class="d-flex flex-row mt-3">
              <router-link 
                class="btn btn-block btn-success"
                :to="{
                  name: 'project',
                  params: {
                    projectId: project._id
                  }
                }">Quản lý dự án này</router-link>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectService from '@/services/ProjectService'
import { bus } from '../../main'
export default {
  data () {
    return {
      projects: []
    }
  },
  methods: {
    async fetchProject () {
      const response = await ProjectService.index()
      this.projects = response.data.slice().reverse()
    }
  },
  created () {
    this.fetchProject()
  },
  mounted () {
    bus.$on('new-project', (newProject) => {
      console.log(newProject)
      this.projects.unshift(newProject)
    })
  }
}
</script>

<style>

</style>
