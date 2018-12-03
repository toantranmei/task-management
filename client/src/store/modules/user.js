import * as types from "../types";
import UserService from "@/services/UserService";

const state = {
	token: null,
	user: null,
	isUserLoggedIn: false,
	userLogged: {
		nameUser: "",
		emailUser: "",
		usernameUser: "",
		optionNameUser: "",
		descUser: "",
		phoneUser: "",
		addressUser: "",
		password: "",
		imageUser: ""
	}
};

const getters = {
	[types.SET_TOKEN]: (state, token) => {
		state.token = token;
		if (token) {
			state.isUserLoggedIn = true;
		} else {
			state.isUserLoggedIn = false;
		}
	},
	[types.SET_USER]: (state, user) => {
		state.user = user;
	},
	[types.USER_LOGGED]: (state, userLogged) => {
		state.userLogged = userLogged;
	},
	[types.USERNAME_USER]: state => {
		return state.userLogged.usernameUser;
	},
	[types.NAME_USER]: state => {
		return state.userLogged.nameUser;
	},
	[types.OPTION_NAME_USER]: state => {
		return state.userLogged.optionNameUser;
	},
	[types.EMAIL_USER]: state => {
		return state.userLogged.emailUser;
	},
	[types.PASSWORD_USER]: state => {
		return state.userLogged.password;
	},
	[types.PHONE_USER]: state => {
		return state.userLogged.phoneUser;
	},
	[types.ADDRESS_USER]: state => {
		return state.userLogged.addressUser;
	},
	[types.DESC_USER]: state => {
		return state.userLogged.descUser;
	}
};

const mutations = {
	[types.MUTATION_SET_TOKEN]: (state, token) => {
		state.token = token;
	},
	[types.MUTATION_SET_USER]: (state, user) => {
		state.token = user;
	},
	[types.MUTATION_UPDATE_USER]: (state, userLogged) => {
		state.userLogged = userLogged;
	}
};

const actions = {
	isUserLoggedIn: state => state.isUserLoggedIn,
	[types.ACTION_SET_TOKEN]: ({ commit }, token) => {
		commit(types.MUTATION_SET_TOKEN, token);
	},
	[types.ACTION_SET_USER]: ({ commit }, user) => {
		commit(types.MUTATION_SET_USER, user);
	},
	[types.SHOW_USER]: async ({ commit }) => {
		try {
			const userId = window.localStorage.getItem("userid");
			const response = await UserService.show(userId);
			commit(types.MUTATION_UPDATE_USER, response.data);
		} catch (error) {
			console.log(error);
		}
	},
	[types.ACTION_UPDATE_USER]: async ({ commit }, userLogged) => {
		try {
			const userId = window.localStorage.getItem("userid");
			await UserService.update(userLogged);
			commit(types.MUTATION_UPDATE_USER, userLogged);
		} catch (e) {
			// statements
			console.log(e);
		}
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
