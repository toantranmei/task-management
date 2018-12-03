const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BoardSchema = new Schema({
  nameBoard: String,
  descBoard: String,
  _users: {
  	type: Schema.Types.ObjectId,
  	ref: 'User'
  },
  _tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }]
})

const Board = mongoose.model('Board', BoardSchema)
module.exports = Board