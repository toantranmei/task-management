const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = new Schema({
  nameRole: String,
  _users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  _permissions: [{
    type: Schema.Types.ObjectId,
    ref: 'Permission'
  }]
})

const Role = mongoose.model('Role', RoleSchema)
module.exports = Role