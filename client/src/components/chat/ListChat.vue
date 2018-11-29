<template>
	<div class="left-part bg-light fixed-left-part  border-top">
		<!-- Mobile toggle button -->
		<a
			class="ti-menu ti-close btn btn-success show-left-part d-block d-md-none"
			href="javascript:void(0)"
		></a>
		<!-- Mobile toggle button -->
		<div class="p-15"><h4>Chat Sidebar</h4></div>
		<div class="scrollable position-relative" style="height:100%;">
			<div class="p-15">
				<h5 class="card-title">Tìm kiếm người dùng</h5>
				<form>
					<input class="form-control" type="text" placeholder="Tìm kiếm..." />
				</form>
			</div>
			<hr />
			<ul class="mailbox list-style-none">
				<li>
					<div class="message-center chat-scroll">
						<a
							href="javascript:void(0)"
							class="message-item"
							id="chat_user_1"
							data-user-id="1"
						>
							<span class="user-img">
								<img
									src="../../assets/images/users/1.jpg"
									alt="user"
									class="rounded-circle"
								/>
								<span class="profile-status online pull-right"></span>
							</span>
							<div class="mail-contnet">
								<h5 class="message-title">Pavan kumar</h5>
								<span class="mail-desc">Just see the my admin!</span>
								<span class="time">9:30 AM</span>
							</div>
						</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script></script>

<style></style>
