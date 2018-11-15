const Joi = require('joi')

module.exports = {
  validateParam: (schema, name) => {
    return (req, res, next) => {
      // console.log('req.params', req.params)
      // req['params'][name] => req.params.name
      const result = Joi.validate({ param: req['params'][name] }, schema)
      if (result.error) {
        return res.status(400).json(result.error)
      } else {
        // Custom validate IDBCursorWithValue, because data will check validate before pass to controller
        // check error while get data to check with Joi
        if (!req.value) { req.value = {} }
        // check error while get data from request
        if (!req.value['params']) { req.value['params'] = {} }
        // assign param: req.value['prams'][name] with result.value.param
        req.value['params'][name] = result.value.param
        next()
      }
    }
  },

  validateBody: (schema) => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema)
      if (result.error) {
        return res.status(400).json(result.error)
      } else {
        if (!req.value) { req.value = {} }
        if (!req.value['body']) { req.value['body'] = {} }
        req.value['body'] = result.value
        next()
      }
    }
  },

  schemas: {
    idSchema: Joi.object().keys({
      // Regular Expression for id
      param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
    }),
    projectSchema: Joi.object().keys({
      nameProject: Joi.string().required(),
      descProject: Joi.string().required()
    }),
    projectOptionalSchema: Joi.object().keys({
      nameProject: Joi.string(),
      descProject: Joi.string()
    }),
    taskSchema: Joi.object().keys({
      nameTask: Joi.string().required(),
      descTask: Joi.string().required()
    }),
    taskOptionalSchema: Joi.object().keys({
      nameTask: Joi.string(),
      descTask: Joi.string()
    })
  }
}