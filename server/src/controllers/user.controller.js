const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const configs = require('../configs/config')

module.exports = {
  index: async (req, res, next) => {

  },
  /* SIGN UP A NEW USER */
  newUser: (req, res, next) => {
    User.find({ emailUser: req.body.emailUser })
      .exec()
      .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: 'Email exists!'
          })
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err
              })
            } else {
              const newUser = new User({
                nameUser: req.body.nameUser,
                emailUser: req.body.emailUser,
                password: hash
              })
              newUser
                .save()
                .then(result => {
                  res.status(201).json({
                    message: 'User Created',
                    data: result
                  })
                })
                .catch(err => {
                  res.status(500).json({
                    error: err
                  })
                })
            }
          })
        }
      })
  },
  /* SIGN IN A NEW USER */
  loginUser: (req, res, next) => {
    User.find({ emailUser: req.body.emailUser })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(401).json({
            message: 'Account is not exists!'
          })
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: 'Password hash wrong!'
            })
          }
          if (result) {
            const token = jwt.sign({
              emailUser: user[0].emailUser,
              userId: user[0]._id
            }, configs.JWT_KEY, {
              expiresIn: '1h'
            })
            return res.status(200).json({
              message: 'Auth successful',
              user: user,
              token: token
            })
          }
          res.status(401).json({
            message: 'The login information was incorrect!'
          })
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err
        })
      })
  },
  /* DELETED A NEW USER */
  removeUser: (req, res, next) => {
    const { userId } = req.params
    User.remove(userId)
      .then(result => {
        res.status(200).json({
          message: 'User deleted!',
          data: result
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err
        })
      })
  }
}