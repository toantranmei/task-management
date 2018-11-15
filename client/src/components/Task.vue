<template>
<div class="page-wrapper">
  <!-- ============================================================== -->
  <!-- Bread crumb and right sidebar toggle -->
  <!-- ============================================================== -->
  <div class="page-breadcrumb">
    <div class="row">
        <div class="col-5 align-self-center">
            <h4 class="page-title">Task Management</h4>
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
                <div id="todo-lists-demo-controls" class="lobilists single-line ui-sortable">
                  
                </div>
              </div>
              <div class="tab-pane p-20" id="timeline" role="tabpanel">2</div>
              <div class="tab-pane p-20" id="calendar" role="tabpanel">3</div>
              <div class="tab-pane p-20" id="conversations" role="tabpanel">4</div>
              <div class="tab-pane p-20" id="files" role="tabpanel">5</div>
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
  <!-- ============================================================== -->
  <!-- footer -->
  <!-- ============================================================== -->
  <footer class="footer text-center">
      All Rights Reserved by AdminBite admin. Designed and Developed by <a href="https://wrappixel.com">WrapPixel</a>.
  </footer>
  <!-- ============================================================== -->
  <!-- End footer -->
  <!-- ============================================================== -->
</div>
</template>

<script>
export default {};
</script>

<style>
</style>
