import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('local', 'development', 'production').required(),
  PORT: Joi.number().port().required(),

  //POSTGRES
  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),
  POSTGRES_PORT: Joi.number().port().required(),

  //REDIS
  REDIS_PORT: Joi.number().port().required(),
});

export const validationOptions = {
  abortEarly: true,
};

export default () => ({
  env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT as string, 10),

  db: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    name: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT,
  },
  redis: {
    port: process.env.REDIS_PORT,
  },
});
