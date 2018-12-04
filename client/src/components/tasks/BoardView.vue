<template>
  <div class="col-12">
    <div class="row mt-3">
      <div class="col-12 col-sm-12 col-md-9">
        <board-info/>
        <task-new/>
        <task-list/>
      </div>
      <div class="col-12 col-sm-12 col-md-3">
        <board-tool/>
        <board-remove/>
      </div>
    </div>
  </div>
</template>

<script>
import BoardInfo from "@/components/tasks/BoardInfo";
import TaskNew from "@/components/tasks/TaskNew";
import TaskList from "@/components/tasks/TaskList";
import BoardTool from "@/components/tasks/BoardTool";
import BoardRemove from "@/components/tasks/BoardRemove";
export default {
  data() {
    return {};
  },
  components: {
    BoardInfo,
    BoardTool,
    TaskList,
    TaskNew,
    BoardRemove
  }
};
</script>

<style></style>
