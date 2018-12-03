import Api from "@/services/Api";

export default {
	index() {},
	show(userId) {
		return Api().get(`user/${userId}`);
	},
	update(user) {
		return Api().patch(`user/${window.localStorage.getItem("userid")}`, user);
	}
};
