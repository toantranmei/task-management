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
  _board: {
    type: Schema.Types.ObjectId,
    ref: 'Board'
  },
  _createBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

const Task = mongoose.model('Task', TaskSchema)
module.exports = Task