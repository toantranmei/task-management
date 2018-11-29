<template>
	<aside class="customizer">
		<a href="javascript:void(0)" class="service-panel-toggle">
			<i class="fa fa-spin fa-cog"></i>
		</a>
		<div class="customizer-body">
			<ul class="nav customizer-tab" role="tablist">
				<li class="nav-item">
					<a
						class="nav-link active"
						id="pills-home-tab"
						data-toggle="pill"
						href="#pills-home"
						role="tab
                                   "
						aria-controls="pills-home"
						aria-selected="true"
					>
						<i class="mdi mdi-wrench font-20"></i>
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						id="pills-profile-tab"
						data-toggle="pill"
						href="#chat"
						role="tab
                                   "
						aria-controls="chat"
						aria-selected="false"
					>
						<i class="mdi mdi-message-reply font-20"></i>
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						id="pills-contact-tab"
						data-toggle="pill"
						href="#pills-contact"
						role="tab
                                   "
						aria-controls="pills-contact"
						aria-selected="false"
					>
						<i class="mdi mdi-star-circle font-20"></i>
					</a>
				</li>
			</ul>
			<div class="tab-content" id="pills-tabContent">
				<div
					class="tab-pane fade"
					id="pills-home"
					role="tabpanel"
					aria-labelledby="pills-home-tab"
				></div>
				<div
					class="tab-pane fade show active"
					id="chat"
					role="tabpanel"
					aria-labelledby="pills-profile-tab"
				>
					<ul class="mailbox list-style-none m-t-20">
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
				<div
					class="tab-pane fade p-15"
					id="pills-contact"
					role="tabpanel"
					aria-labelledby="pills-contact-tab"
				></div>
			</div>
		</div>
	</aside>
</template>

<script></script>

<style></style>
