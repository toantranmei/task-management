const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  nameUser: String,
  emailUser: String,
  usernameUser: String,
  optionNameUser: String,
  descUser: String,
  password: String,
  status: Number,
  _roles: {
    type: Schema.Types.ObjectId,
    ref: 'Role'
  }
})

const User = mongoose.model('User', UserSchema)
module.exports = User