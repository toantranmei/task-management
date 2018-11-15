const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = new Schema({
  nameRole: String,
  _role: {
    type: Schema.Types.ObjectId,
    ref: 'Role'
  }
})

const Role = mongoose.model('Role', RoleSchema)
module.exports = Role