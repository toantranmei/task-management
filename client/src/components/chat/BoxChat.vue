<template>
  <div class="right-part  border-top">
    <div class="p-20">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Nội dung tin nhắn</h4>
          <div class="chat-box scrollable" style="height:calc(100vh - 300px);">
            <!-- chat Row -->
            <ul class="chat-list">
              <!-- chat Row -->
              <li class="chat-item">
                <div class="chat-img">
                  <img src="../../assets/images/users/1.jpg" alt="user" />
                </div>
                <div class="chat-content">
                  <h6 class="font-medium">James Anderson</h6>
                  <div class="box bg-light-info">
                    Lorem Ipsum is simply dummy text of the printing &amp; type
                    setting industry.
                  </div>
                </div>
                <div class="chat-time">10:56 am</div>
              </li>
              <!-- chat Row -->
              <li class="chat-item">
                <div class="chat-img">
                  <img src="../../assets/images/users/2.jpg" alt="user" />
                </div>
                <div class="chat-content">
                  <h6 class="font-medium">Bianca Doe</h6>
                  <div class="box bg-light-info">
                    It’s Great opportunity to work.
                  </div>
                </div>
                <div class="chat-time">10:57 am</div>
              </li>
              <!-- chat Row -->
              <li class="odd chat-item">
                <div class="chat-content">
                  <div class="box bg-light-inverse">
                    I would love to join the team.
                  </div>
                  <br />
                </div>
              </li>
              <!-- chat Row -->
              <li class="odd chat-item">
                <div class="chat-content">
                  <div class="box bg-light-inverse">
                    Whats budget of the new project.
                  </div>
                  <br />
                </div>
                <div class="chat-time">10:59 am</div>
              </li>
              <!-- chat Row -->
              <li class="chat-item">
                <div class="chat-img">
                  <img src="../../assets/images/users/3.jpg" alt="user" />
                </div>
                <div class="chat-content">
                  <h6 class="font-medium">Angelina Rhodes</h6>
                  <div class="box bg-light-info">
                    Well we have good budget for the project
                  </div>
                </div>
                <div class="chat-time">11:00 am</div>
              </li>
              <!-- chat Row -->
            </ul>
          </div>
        </div>
        <div class="card-body border-top">
          <div class="row">
            <div class="col-9">
              <div class="input-field m-t-0 m-b-0">
                <input
                  id="textarea1"
                  placeholder="Type and enter"
                  class="form-control border-0"
                  type="text"
                />
              </div>
            </div>
            <div class="col-3">
              <a
                class="btn-circle btn-lg btn-cyan float-right text-white"
                href="javascript:void(0)"
              >
                <i class="fas fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  data() {
    return {
      messages: [],
      message: {
        type: "",
        action: "",
        user: "",
        text: "",
        timestamp: ""
      },
      areTyping: [],
      socket: io("localhost:8081")
    };
  },
  methods: {
    send() {},
    userIsTyping(username) {},
    usersAreTyping() {},
    stoppedTyping() {}
  },
  created() {}
};
</script>

<style></style>
