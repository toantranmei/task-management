<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-9">
        <toolbar-project :current-comp="currentComp"/>
        <component :is="currentComp"></component>
        <list-project/>
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
import ToolbarProject from '@/components/projects/ToolbarProject'
import CreateProject from '@/components/projects/CreateProject'
import ListProject from '@/components/projects/ListProject'
import LFilter from '@/components/projects/FilterProject'
import LTaskToday from '@/components/projects/TaskProject'
import { bus } from '../../main.js'
export default {
  components: {
    LFilter, LTaskToday, CreateProject, ToolbarProject, ListProject
  },
  data () {
    return {
      currentComp: ''
    }
  },
  methods: {
    
  },
  created () {
    bus.$on('callComponent', comp => {
      this.currentComp = comp;
    })
    bus.$on('closeComponent', comp => {
      this.currentComp = comp
    })
  }
}
</script>

<style>

</style>
