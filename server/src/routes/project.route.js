// Import dependiences
const router = require('express-promise-router')()
const ProjectsController = require('../controllers/project.controller')

const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers')

router.route('/')
  .get(ProjectsController.index)
  .post(validateBody(schemas.projectSchema), ProjectsController.newProject)

router.route('/:projectId')
  .get(validateParam(schemas.idSchema, 'projectId'), ProjectsController.getProject)
  .put([validateParam(schemas.idSchema, 'projectId'), validateBody(schemas.projectSchema)], ProjectsController.replaceProject)
  .patch([validateParam(schemas.idSchema, 'projectId'), validateBody(schemas.projectOptionalSchema)], ProjectsController.updateProject)

router.route('/:projectId/tasks')
  .get(validateParam(schemas.idSchema, 'projectId'), ProjectsController.getProjectTask)
  .post([validateParam(schemas.idSchema, 'projectId'), validateBody(schemas.taskSchema)], ProjectsController.newProjectTask)

// Export module
module.exports = router