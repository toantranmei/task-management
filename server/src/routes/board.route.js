// Import dependiences
const router = require("express-promise-router")();
const BoardController = require("../controllers/board.controller");

router
	.route("/:userId")
	.get(BoardController.getAllBoardByUser)
	.post(BoardController.addBoardByUser);
router
	.route("/:boardId/board")
	.get(BoardController.getInfoBoard)
	.patch(BoardController.updateInfoBoard);
router
	.route("/:boardId/tasks")
	.get(BoardController.getAllTaskByBoard)
	.post(BoardController.addTaskByBoard)

module.exports = router;
