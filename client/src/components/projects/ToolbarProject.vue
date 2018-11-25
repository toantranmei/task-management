<template>
  <div class="row no-gutters">
    <div class="col-6">
      <button 
        type="button"
        class="btn waves-effect waves-light btn-success mb-3"
        @click="calledComponent('create-project')"
        :disabled="currentComp === 'create-project'">Tạo dự án</button>
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
</template>

<script>
import { bus } from '../../main.js'
export default {
  props: {
    currentComp: {
      type: String,
      required: true
    }
  },
  methods: {
    calledComponent(comp) {
      bus.$emit('callComponent', comp)
    }
  }
}
</script>

<style>

</style>
