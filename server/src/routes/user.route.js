// Import dependiences
const router = require('express-promise-router')()
const UserController = require('../controllers/user.controller')

router.route('/signup')
  .post(UserController.newUser)

router.route('/')
  .get(UserController.getAllUsers)

router.route('/:userId')
  .delete(UserController.removeUser)
  .get(UserController.getUserById)
  .patch(UserController.updateUser)

router.route('/login')
  .post(UserController.loginUser)

// Export module
module.exports = router