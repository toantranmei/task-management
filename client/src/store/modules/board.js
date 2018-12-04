import * as types from "../types";
import BoardService from "@/services/BoardService";

const state = {
  boards: [],
  tasks: [],
  currentBoard: {
    nameBoard: '',
    descBoard: ''
  },
  statusTitle: "",
  statusAddTaskBoard: "",
  statusStats: "",
  statusTask: "",
  statusDoneTask: ""
};

const getters = {
  [types.BOARDS]: state => {
    return state.boards;
  },
  [types.NEW_BOARD]: state => {
    return state.newBoard;
  },
  [types.CURRENT_BOARD]: state => {
    return state.currentBoard;
  },
  [types.STATUS_TITLE]: state => {
    return state.statusTitle;
  },
  [types.STATUS_ADD_TASK_BOARD]: state => {
    return state.statusAddTaskBoard;
  },
  [types.STATUS_STATS]: state => {
    return state.statusStats;
  },
  [types.STATUS_TASK]: state => {
    return state.statusTask;
  },
  [types.STATUS_DONE_TASK]: state => {
    return state.statusDoneTask;
  },
  [types.TASKS]: state => {
    return state.tasks;
  }
};

const mutations = {
  [types.MUTATION_BOARDS]: (state, boards) => {
    state.boards = boards;
  },
  [types.MUTATION_ADD_BOARD]: (state, boardObject) => {
    state.boards.push(boardObject);
  },
  [types.MUTATION_CURRENT_BOARD]: (state, currentBoard) => {
    state.currentBoard = currentBoard;
  },
  [types.MUTATION_STATUS_TITLE]: (state, statusTitle) => {
    state.statusTitle = statusTitle;
  },
  [types.MUTATION_STATUS_ADD_TASK_BOARD]: (state, statusAddTaskBoard) => {
    state.statusAddTaskBoard = statusAddTaskBoard;
  },
  [types.MUTATION_STATUS_STATS]: (state, statusStats) => {
    state.statusStats = statusStats;
  },
  [types.MUTATION_STATUS_TASK]: (state, statusTask) => {
    state.statusTask = statusTask;
  },
  [types.MUTATION_STATUS_DONE_TASK]: (state, statusDoneTask) => {
    state.statusDoneTask = statusDoneTask;
  },
  [types.MUTATION_TASKS]: (state, tasks) => {
    state.tasks = tasks
  },
  [types.MUTATION_ADD_TASK]: (state, taskObject) => {
    state.tasks.push(taskObject)
  }
};

const actions = {
  [types.ACTION_BOARDS]: async ({
    commit
  }) => {
    try {
      const userId = window.localStorage.getItem("userid");
      const response = await BoardService.index(userId);
      commit(types.MUTATION_BOARDS, response.data);
    } catch (e) {
      console.log(e);
    }
  },
  [types.ACTION_SAVE_BOARD]: async ({
    commit
  }, board) => {
    try {
      const response = await BoardService.save(board);
      commit(types.MUTATION_ADD_BOARD, response.data);
    } catch (e) {
      console.log(e);
    }
  },
  [types.ACTION_CURRENT_BOARD]: async ({
    commit
  }, boardId) => {
    try {
      const response = await BoardService.show(boardId);
      commit(types.MUTATION_CURRENT_BOARD, response.data);
      commit(types.MUTATION_BOARDS);
    } catch (e) {
      console.log(e);
    }
  },
  [types.ACTION_UPDATE_BOARD]: async ({
    commit
  }, board) => {
    try {
      const response = await BoardService.update(board);
      commit(types.MUTATION_CURRENT_BOARD, response.data);
      commit(types.MUTATION_BOARDS);
    } catch (e) {
      console.log(e);
    }
  },
  [types.ACTION_TASKS]: async ({
    commit
  }, boardId) => {
    try {
      const response = await BoardService.getAllTask(boardId);
      commit(types.MUTATION_TASKS, response.data);
    } catch(e) {
      console.log(e)
    }
  },
  [types.ACTION_ADD_TASK]: async ({commit}, boardId, task) => {
    try {
      console.log(boardId);
      console.log(task);
      const response = await BoardService.addTask(boardId, task)
      commit(types.MUTATION_ADD_TASK, response.data)
    } catch (error) {
      console.log(error)
    }
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
