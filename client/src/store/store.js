import Vue from "vue";
import Vuex from "vuex";
// Import all moudles in modules folder
import user from "./modules/user";
import board from './modules/board'
// Import partials file in store folder
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

Vue.use(Vuex);

const namespaced = true;

export default new Vuex.Store({
	namespaced,
	state: {},
	getters,
	mutations,
	actions,
	modules: {
		user,
		board
	}
});
