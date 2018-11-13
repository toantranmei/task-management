const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  nameProject: String,
  descProject: String,
  start_at: { type: Date, default: Date.now },
  end_at: { type: Date, default: Date.now },
  _tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }]
})

const Project = mongoose.model('Project', ProjectSchema)
module.exports = Project