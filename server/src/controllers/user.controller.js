const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const configs = require('../configs/config')

module.exports = {
  /* SIGN UP A NEW USER */
  newUser: (req, res, next) => {
    User.find({ emailUser: req.body.emailUser })
      .exec()
      .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({
            error: 'Email exists!'
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
                .then(user => {
                  const token = jwt.sign({
                    emailUser: user.emailUser,
                    userId: user._id
                  }, configs.JWT_KEY, {
                    expiresIn: '1h'
                  })
                  res.status(201).json({
                    user: user,
                    token: token
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
            error: 'Account is not exists!'
          })
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              error: 'The login information was incorrect!!'
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
            error: 'Password is not correctly!'
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
    User.findByIdAndRemove(userId)
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
  },
  /* GET ALL USERS */
  getAllUsers: async (req, res, next) => {
    const users = await User.find({})
    res.status(200).json(users)
  },
  /* GET USER BY ID */
  getUserById: async (req, res, next) => {
    const { userId } = req.params
    const user = await User.findById(userId)
    res.status(200).json(user)
  },
  /* UPDATE USER */
  updateUser: (req, res, next) => {
    User.find({ emailUser: req.body.emailUser })
      .exec()
      .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: 'Email exists!'
          })
        } else {
          const { userId } = req.params
          const newUser = req.body
          User.findByIdAndUpdate(userId, newUser)
            .then(result => {
              res.status(201).json({
                message: 'User Updated',
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
  },
  /* LOGOUT USER */
  logoutUser: (req, res, next) => {

  }
}