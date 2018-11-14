// Import dependiences
const router = require('express-promise-router')()
const ProjectsController = require('../controllers/project.controller')

const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers')

router.route('/')
  .get(ProjectsController.index)
  .post(validateBody(schemas.projectSchema), ProjectsController.newProject)

router.route('/:projectId')
  .get(validateParam(schemas.idSchema, 'projectId'), ProjectsController.getProject)
  .put(ProjectsController.replaceProject)
  .patch(ProjectsController.updateProject)

router.route('/:projectId/tasks')
  .get(ProjectsController.getProjectTask)
  .post(ProjectsController.newProjectTask)

// Export module
module.exports = router