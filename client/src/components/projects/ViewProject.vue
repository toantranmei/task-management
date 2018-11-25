<template>
    <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-9">
        <div class="row no-gutters">
          <div class="col-6">
            <button
              type="button"
              class="btn waves-effect waves-light btn-success mb-3"
              @click="$router.go(-1)"
              >Quay lại</button>
          </div>
          <div class="col-6 text-right">
            <button
              type="button"
              class="btn waves-effect waves-light btn-outline-danger mb-3"
              >Xóa dự án</button>
          </div>
        </div>
        <div class="list-project">
          <info-project/>
          <alaynis-project/>
          <task-list-project/>
          <create-post-project/>
          <posts-project/>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <sidebar-view-project/>
        <members-project/>
      </div>
    </div>
  </div>
</template>

<script>
import InfoProject from '@/components/projects/InfoProject'
import AlaynisProject from '@/components/projects/AlaynisProject'
import TaskListProject from '@/components/projects/TaskListProject'
import SidebarViewProject from '@/components/projects/SidebarViewProject'
import MembersProject from '@/components/projects/MembersProject'
import CreatePostProject from '@/components/projects/CreatePostProject'
import PostsProject from '@/components/projects/PostsProject'
export default {
  components: {
    AlaynisProject, TaskListProject, SidebarViewProject, MembersProject, CreatePostProject, PostsProject, InfoProject
  }
}
</script>

<style>

</style>
