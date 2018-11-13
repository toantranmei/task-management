const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  nameTask: String,
  descTask: String,
  statusTask: Number,
  _project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  _createBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  create_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
})

const Task = mongoose.model('Task', TaskSchema)
module.exports = Task