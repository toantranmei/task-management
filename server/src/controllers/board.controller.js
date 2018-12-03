const Board = require("../models/Board");
const Task = require("../models/Task");
const User = require("../models/User");

module.exports = {
	getAllBoardByUser: async (req, res, next) => {
		const { userId } = req.params;
		const boards = await User.findById(userId).populate("_boards");
		res.status(200).json(boards._boards);
	},
	addBoardByUser: async (req, res, next) => {
		const { userId } = req.params;
		const newBoard = new Board(req.body);
		const user = await User.findById(userId);
		newBoard.user = user;
		await newBoard.save();
		user._boards.push(newBoard);
		await user.save();
		res.status(201).json(newBoard);
	},
	getInfoBoard: async (req, res, next) => {
		const { boardId } = req.params;
		const board = await Board.findById(boardId);
		res.status(200).json(board);
	},
	updateInfoBoard: async (req, res, next) => {
		const { boardId } = req.params;
		const newBoard = req.body;
		await Board.findByIdAndUpdate(boardId, newBoard);
		res.status(200).json(newBoard);
	}
};
