const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./configs/config')
const projects = require('./routes/project.route')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

// Define promises for mongoose
mongoose.Promise = global.Promise

// Connect to DB
// mongoose.connect(
//   'mongodb+srv://admin:' +
//   config.MONGO_ATLAS_PW +
//   '@rest-ytb-3lcnj.mongodb.net/test?retryWrites=true',
//   {
//     useNewUrlParser: true
//   }
// )
mongoose.connect('mongodb://localhost:27017/taskmongodb', { useNewUrlParser: true })

/****************************************************
*Define Routes middleware, while pass data to client
****************************************************/
app.use('/projects', projects)
/***************************************************/

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error('Not found!')
  err.status = 404
  next(err)
})

// Erorr handler function
app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {}
  const status = err.status || 500

  // Respond to client
  res.status(status).json({ error: { message: error.message } })
})

app.listen(process.env.PORT || config.port)