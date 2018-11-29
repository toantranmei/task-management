const Project = require("../models/Project");
const Task = require("../models/Task");

module.exports = {
  index: async (req, res, next) => {
    const projects = await Project.find({});
    res.status(200).json(projects);
  },

  newProject: async (req, res, next) => {
    const newProject = new Project(req.body);
    const project = await newProject.save();
    res.status(201).json(project);
  },

  getProject: async (req, res, next) => {
    const { projectId } = req.value.params;
    const project = await Project.findById(projectId);
    res.status(200).json(project);
  },

  replaceProject: async (req, res, next) => {
    const { projectId } = req.params;
    const newProject = req.body;
    await Project.findByIdAndUpdate(projectId, newProject);
    res.status(200).json({ success: true });
  },

  updateProject: async (req, res, next) => {
    const { projectId } = req.params;
    const newProject = req.body;
    await Project.findByIdAndUpdate(projectId, newProject);
    res.status(200).json({
      project: newProject
    });
  },

  getProjectTask: async (req, res, next) => {
    const { projectId } = req.params;
    const project = await Project.findById(projectId).populate("_tasks");
    res.status(200).json(project._tasks);
  },

  newProjectTask: async (req, res, next) => {
    const { projectId } = req.params;
    // Create new task to get data user
    const newTask = new Task(req.body);
    // get project
    const project = await Project.findById(projectId);
    // assign task to project
    newTask.project = project;
    // save task
    await newTask.save();
    // add task to the project's array
    project._tasks.push(newTask);
    // save project
    await project.save();
    res.status(201).json(newTask);
  },

  removeProject: async (req, res, next) => {
    const { projectId } = req.params;
    Project.findByIdAndRemove(projectId)
      .then(result => {
        res.status(200).json({
          message: "Project deleted!",
          data: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  }
};
