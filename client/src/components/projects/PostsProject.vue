<template>
<div class="card">
  <div class="card-body">
    <div class="d-flex flex-row">
      <div class="align-self-center">
        <img 
          src="../../assets/images/users/1.jpg" 
          alt=""
          style="width: 50px; height: auto;"
          class="rounded-circle">
      </div> 
      <div class="m-l-10 w-100 align-self-center">
        <h5><a href="">Phạm Văn Đức</a> tạo một thảo luận</h5> 
        <a class="text-muted">3 giờ</a>
      </div>
    </div>
    <div class="content pt-3">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  
    </div>
    <div class="like-comm text-right"> 
      <a href="javascript:void(0)" class="link m-r-10">2 Bình luận</a> 
      <a href="javascript:void(0)" class="link m-r-10">
        <i class="fa fa-heart text-danger"></i> 5 Yêu thích
      </a> 
    </div>
  </div>
  <div class="card-body border-top">
    <div class="row">
      <div class="col-6 text-center">
        <a href="javascript:void(0)" class="link m-r-10">
          <i class="ti-heart"></i> Yêu thích
        </a>
      </div>
      <div class="col-6 text-center">
        <a href="javascript:void(0)" class="link m-r-10">
          <i class="ti-comment"></i> Bình luận
        </a>
      </div>
    </div>
  </div>
  <div class="card-body border-top">
    <div class="d-flex flex-row comment-row m-t-0">
        <div class=""><img src="../../assets/images/users/1.jpg" alt="user" width="50" class="rounded-circle"></div>
        <div class="comment-text w-100 mb-2">
            <h6 class="font-medium">James Anderson <span class="text-muted ml-2">April 14, 2016</span></h6>
            <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
        </div>
    </div>
    <div class="d-flex flex-row comment-row m-t-0">
        <div class=""><img src="../../assets/images/users/1.jpg" alt="user" width="50" class="rounded-circle"></div>
        <div class="comment-text w-100 mb-2">
            <h6 class="font-medium">James Anderson <span class="text-muted ml-2">April 14, 2016</span></h6>
            <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
        </div>
    </div>
    <div class="d-flex flex-row comment-row m-t-0">
        <div class=""><img src="../../assets/images/users/1.jpg" alt="user" width="50" class="rounded-circle"></div>
        <div class="comment-text w-100 mb-2">
            <h6 class="font-medium">James Anderson <span class="text-muted ml-2">April 14, 2016</span></h6>
            <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
        </div>
    </div>
  </div>
  <div class="card-body border-top">
    <div class="row">
      <div class="col-10">
        <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="2"
          class="form-control border-0"
          placeholder="Viết bình luận gì đó..."
          style="resize: none;"></textarea>
      </div>
      <div class="col-2">
        <a class="btn-circle btn-lg btn-cyan float-right text-white" href="javascript:void(0)">
          <i class="fas fa-paper-plane"></i>
        </a>
      </div>
    </div>
  </div>
</div>    
</template>

<script>
export default {};
</script>

<style>
</style>
