
const Joi = require('joi')


const simpleSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  phone: Joi.string().min(10).max(13),

})




module.exports = simpleSchema