import Api from "@/services/Api";

export default {
	index(userId) {
		return Api().get(`boards/${userId}`);
	},
	save(board) {
		return Api().post(`boards/${window.localStorage.getItem("userid")}`, board);
	},
	show(boardId) {
		return Api().get(`boards/${boardId}/board`);
	},
	update(board) {
		return Api().patch(`boards/${board._id}/board`, board);
	}
};
