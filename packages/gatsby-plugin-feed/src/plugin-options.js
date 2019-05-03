import Joi from "joi"

// TODO: make serialize required in next major version bump
const feed = Joi.object({
  output: Joi.string().required(),
  feedUrl: Joi.string(),
  query: Joi.string().required(),
  title: Joi.string(),
  serialize: Joi.func(),
}).unknown(true)

// TODO: make feeds required in next major version bump
export default Joi.object({
  generator: Joi.string(),
  query: Joi.string(),
  setup: Joi.func(),
  feeds: Joi.array().items(feed),
}).unknown(true)
