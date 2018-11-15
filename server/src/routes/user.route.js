// Import dependiences
const router = require('express-promise-router')()
const UserController = require('../controllers/user.controller')

// const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers')

router.route('/signup')
  .post(UserController.newUser)

router.route('/:userId')
  .delete(UserController.removeUser)

router.route('/login')
  .post(UserController.loginUser)

// Export module
module.exports = router