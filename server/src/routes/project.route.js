// Import dependiences
const router = require('express-promise-router')()
const ProjectsController = require('../controllers/project.controller')

router.route('/')
  .get(ProjectsController.index)
  .post(ProjectsController.newProject)

router.route('/:projectId')
  .get(ProjectsController.getProject)
  .put(ProjectsController.replaceProject)
  .patch(ProjectsController.updateProject)

router.route('/:projectId/tasks')
  .get(ProjectsController.getProjectTask)
  .post(ProjectsController.newProjectTask)

// Export module
module.exports = router