const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  nameUser: String,
  emailUser: String,
  usernameUser: String,
  optionNameUser: String,
  descUser: String,
  phoneUser: Number,
  addressUser: String,
  password: String,
  imageUser: String,
  status: Number,
  _roles: {
    type: Schema.Types.ObjectId,
    ref: 'Role'
  }
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)
module.exports = User