<template>
<div class="card">
  <div class="card-body">
  <h4 class="card-title">Task List</h4>
  <div class="todo-widget scrollable ps-container ps-theme-default ps-active-y" style="height:450px;" data-ps-id="b3b4d99b-a130-9925-48d3-f6940320e275">
      <ul class="list-task todo-list list-group m-b-0" data-role="tasklist">
          <li class="list-group-item todo-item" data-role="task">
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck">
                  <label class="custom-control-label todo-label" for="customCheck">
                      <span class="todo-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> <span class="badge badge-pill badge-danger float-right">Today</span>
                  </label>
              </div>
              <ul class="list-style-none assignedto">
                  <li class="assignee"><img class="assignee-img" src="../../assets/images/users/1.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Steave"></li>
                  <li class="assignee"><img class="assignee-img" src="../../assets/images/users/2.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Jessica"></li>
                  <li class="assignee"><img class="assignee-img" src="../../assets/images/users/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Priyanka"></li>
                  <li class="assignee"><img class="assignee-img" src="../../assets/images/users/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Selina"></li>
              </ul>
          </li>
          <li class="list-group-item todo-item" data-role="task">
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label todo-label" for="customCheck1">
                      <span class="todo-desc">Lorem Ipsum is simply dummy text of the printing</span><span class="badge badge-pill badge-primary float-right">1 week </span>
                  </label>
              </div>
              <div class="item-date"> 26 jun 2017</div>
          </li>
          <li class="list-group-item todo-item" data-role="task">
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck2">
                  <label class="custom-control-label todo-label" for="customCheck2">
                      <span class="todo-desc">Give Purchase report to</span> <span class="badge badge-pill badge-info float-right">Yesterday</span>
                  </label>
              </div>
              <ul class="list-style-none assignedto">
                  <li class="assignee"><img class="assignee-img" src="../../assets/images/users/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Priyanka"></li>
                  <li class="assignee"><img class="assignee-img" src="../../assets/images/users/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Selina"></li>
              </ul>
          </li>
          <li class="list-group-item todo-item" data-role="task">
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck3">
                  <label class="custom-control-label todo-label" for="customCheck3">
                      <span class="todo-desc">Lorem Ipsum is simply dummy text of the printing </span> <span class="badge badge-pill badge-warning float-right">2 weeks</span>
                  </label>
              </div>
              <div class="item-date"> 26 jun 2017</div>
          </li>
          <li class="list-group-item todo-item" data-role="task">
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck4">
                  <label class="custom-control-label todo-label" for="customCheck4">
                      <span class="todo-desc">Give Purchase report to</span> <span class="badge badge-pill badge-info float-right">Yesterday</span>
                  </label>
              </div>
              <ul class="list-style-none assignedto">
                  <li class="assignee"><img class="assignee-img" src="../../assets/images/users/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Priyanka"></li>
                  <li class="assignee"><img class="assignee-img" src="../../assets/images/users/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Selina"></li>
              </ul>
          </li>
      </ul>
  <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px; height: 450px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 417px;"></div></div></div>
</div>
</div>
</template>

<script>
const { renderProjectScripts } = require('../../configs/scripts')
export default {
  mounted () {
    renderProjectScripts()
  }
}
</script>

<style>

</style>
