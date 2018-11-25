<template>
  <div class="card">
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
</template>

<script>
import ProjectService from '@/services/ProjectService'
export default {
  data () {
    return {
      project: {
        nameProject: null,
        descProject: null
      },
      error: null,
      required: (value) => !!value || 'Required!'
    }
  },
  async mounted () {
    try {
      const projectId = this.$store.state.route.params.projectId
      const projectDetails = (await ProjectService.show(projectId))
      this.project = projectDetails.data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>

</style>
