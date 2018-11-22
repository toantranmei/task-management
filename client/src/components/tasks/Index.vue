<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
          <div class="card">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#board" role="tab"><span class="hidden-xs-down">Bảng công việc</span></a> </li>
                <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#timeline" role="tab"><span class="hidden-xs-down">Quá trình</span></a> </li>
                <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#calendar" role="tab"><span class="hidden-xs-down">Lịch biểu</span></a> </li>
                <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#conversations" role="tab"><span class="hidden-xs-down">Thảo luận</span></a> </li>
                <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#files" role="tab"><span class="hidden-xs-down">Tài liệu</span></a> </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content tabcontent-border">
              <div class="tab-pane p-20 active" id="board" role="tabpanel">
                <div id="todo-lists-demo-controls" class="lobilists single-line ui-sortable"></div>
              </div>
              <div class="tab-pane p-20" id="timeline" role="tabpanel">2</div>
              <div class="tab-pane p-20" id="calendar" role="tabpanel">3</div>
              <div class="tab-pane p-20" id="conversations" role="tabpanel">4</div>
              <div class="tab-pane p-20" id="files" role="tabpanel">5</div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
const { renderTaskScripts } = require('../../configs/scripts')
export default {
  mounted() {
    renderTaskScripts()
  }
}
</script>

<style>
</style>